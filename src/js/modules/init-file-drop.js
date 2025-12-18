export function initFileDrop() {

    const dropZone  = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const fileTitle = document.getElementById('fileTitle');
    const fileText  = document.getElementById('fileText');

    const fileNameWrap = document.getElementById('fileName');
    const fileTextEl   = fileNameWrap?.querySelector('.popup__file-text');
    const removeBtn    = fileNameWrap?.querySelector('.popup__file-remove');

    const MAX_SIZE = 10 * 1024 * 1024;

    if (!dropZone || !fileInput || !fileNameWrap) return;

    // Drag & Drop
    ['dragenter', 'dragover'].forEach(evt => {
        dropZone.addEventListener(evt, e => {
            e.preventDefault();
            dropZone.classList.add('dragover');
        });
    });

    ['dragleave', 'dragend', 'drop'].forEach(evt => {
        dropZone.addEventListener(evt, e => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
        });
    });

    dropZone.addEventListener('drop', e => {
        const files = e.dataTransfer.files;
        if (files.length) handleFile(files[0]);
    });

    // Click upload
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length) handleFile(fileInput.files[0]);
    });

    // Remove file
    removeBtn.addEventListener('click', resetFile);

    // Handle file
    function handleFile(file) {

        if (file.size > MAX_SIZE) {
            alert('File size must be less than 10 MB');
            resetFile();
            return;
        }

        dropZone.classList.add('loaded');
        fileTitle.textContent = 'File attached';
        fileText.textContent  = 'You can remove the file';

        fileNameWrap.style.display = 'flex';
        fileTextEl.textContent = file.name;

        // sync drop → input
        const dt = new DataTransfer();
        dt.items.add(file);
        fileInput.files = dt.files;
    }

    // Reset
    function resetFile() {
        fileInput.value = '';
        dropZone.classList.remove('loaded');
        fileTitle.textContent = 'Attach your file';
        fileText.textContent  = 'File size not more than 10 MB';

        fileTextEl.textContent = '';
        fileNameWrap.style.display = 'none';
    }

    // init state
    fileNameWrap.style.display = 'none';
}
