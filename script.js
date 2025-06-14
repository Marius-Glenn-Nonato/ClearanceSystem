// Toggle between Officers and Enlisted Personnel
        document.getElementById('officersBtn').addEventListener('click', function() {
            this.classList.add('active');
            document.getElementById('enlistedBtn').classList.remove('active');
            const contentArea = document.getElementById('contentArea');
                
            contentArea.innerHTML = '';
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-state';

            const officerIcon = document.createElement('i');
            officerIcon.className = 'fas fa-user-tie';
            emptyState.appendChild(officerIcon);
            const heading = document.createElement('h3');
            heading.textContent = 'Officer Content Unavailable';
            emptyState.appendChild(heading);

            const message = document.createElement('p');
            message.textContent = 'Please select Enlisted Personnel for available options';
            emptyState.appendChild(message);

            contentArea.appendChild(emptyState);
    
        });
        
        document.getElementById('enlistedBtn').addEventListener('click', function() {
            this.classList.add('active');
            document.getElementById('officersBtn').classList.remove('active');
        
            const contentArea = document.getElementById('contentArea');
            contentArea.innerHTML = '';
            const searchSection = document.createElement('div');
            searchSection.className = 'search-section';
            const sectionTitle = document.createElement('div');
            sectionTitle.className = 'section-title';
            const searchIcon = document.createElement('i');
            searchIcon.className = 'fas fa-search';
            const titleText = document.createElement('h2');
            titleText.textContent = 'Enlisted Personnel Search';

            sectionTitle.appendChild(searchIcon);
            sectionTitle.appendChild(titleText);

    
            const epSearchBtn = document.createElement('button');
            epSearchBtn.id = 'epSearchBtn';
            epSearchBtn.className = 'ep-search-btn';

            const idCardIcon = document.createElement('i');
            idCardIcon.className = 'fas fa-id-card';

            epSearchBtn.appendChild(idCardIcon);
            epSearchBtn.appendChild(document.createTextNode(' EP Individual Search'));

            const actionGrid = document.createElement('div');
            actionGrid.className = 'action-grid';

            const buttons = [
                { icon: 'fa-undo', label: 'Return 1' },
                { icon: 'fa-redo', label: 'Return 2' },
                { icon: 'fa-sync', label: 'Return 3' },
                { icon: 'fa-exchange-alt', label: 'Return 4' },
                { icon: 'fa-archive', label: 'Return 5' }
            ];

            buttons.forEach(btn => {
                const actionBtn = document.createElement('button');
                actionBtn.className = 'action-btn';

                const btnIcon = document.createElement('i');
                btnIcon.className = `fas ${btn.icon}`;

                actionBtn.appendChild(btnIcon);
                actionBtn.appendChild(document.createTextNode(` ${btn.label}`));

                actionGrid.appendChild(actionBtn);
            });

            searchSection.appendChild(sectionTitle);
            searchSection.appendChild(epSearchBtn);
            searchSection.appendChild(actionGrid);

            contentArea.appendChild(searchSection);
            document.getElementById('epSearchBtn').addEventListener('click', function() {
                window.location.href = 'ep_search.html';
            });
        });
        
    
        document.getElementById('enlistedBtn').click();