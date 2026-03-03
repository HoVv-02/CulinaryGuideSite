  const burgerBtn = document.getElementById('burgerBtn');
        const navMenu = document.getElementById('navMenu');

        if (burgerBtn && navMenu) {
            burgerBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                burgerBtn.classList.toggle('active');
            });
        } else {
            console.error('Элементы burgerBtn или navMenu не найдены!');
        }

        document.addEventListener('DOMContentLoaded', () => {
        const track = document.getElementById('cardsTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        // Функция для получения актуальной ширины карточки
        const getCardWidth = () => {
            const card = track.querySelector('.card');
            if (!card) return 300;
            // Получаем полную ширину карточки с учётом отступов
            return card.getBoundingClientRect().width + 20; // 20px = gap
        };

        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
        });
    });