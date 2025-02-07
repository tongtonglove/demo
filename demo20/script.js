const player = document.getElementById('player');
let posX = 375; // 初始位置 X
let posY = 275; // 初始位置 Y

// 页面加载时立即设置角色位置
player.style.left = `${posX}px`;
player.style.top = `${posY}px`;

document.addEventListener('keydown', (event) => {
    const speed = 10; // 移动速度

    switch (event.key) {
        case 'ArrowUp':
            posY = Math.max(0, posY - speed);
            break;
        case 'ArrowDown':
            posY = Math.min(550, posY + speed);
            break;
        case 'ArrowLeft':
            posX = Math.max(0, posX - speed);
            break;
        case 'ArrowRight':
            posX = Math.min(750, posX + speed);
            break;
    }

    player.style.left = `${posX}px`;
    player.style.top = `${posY}px`;
});