function injectToggles() {
    const discussions = document.querySelectorAll('.ui.discussion.segment.corner');

    discussions.forEach((discussion) => {
        // Skip if we already added a toggle to this one
        if (discussion.dataset.hasToggle) return;

        const labelContainer = discussion.querySelector('.line.number');
        const contentDiv = discussion.children[2];

        if (labelContainer && contentDiv) {
            const toggleBtn = document.createElement('a');
            toggleBtn.innerText = 'hide';
            toggleBtn.style.cssText = "cursor:pointer; margin-right:10px; font-size:1em; font-weight:bold; color:#4183c4;";

            toggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (contentDiv.style.display === 'none') {
                    contentDiv.style.display = '';
                    toggleBtn.innerText = 'hide';
                } else {
                    contentDiv.style.display = 'none';
                    toggleBtn.innerText = 'show';
                }
            });

            labelContainer.prepend(toggleBtn);
            discussion.dataset.hasToggle = "true";
        }
    });
}

setInterval(injectToggles, 1000);
