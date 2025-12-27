// Product Detail Page JavaScript

// Products data array
const products = [
  { id: 1, name: "habit complet...", image: "../img/Screenshot from 2025-12-17 02-20-18.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 2, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-11-57.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 3, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-12-33.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 4, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-13-08.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 5, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-14-39.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 6, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-15-46.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 7, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-16-04.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 8, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-16-38.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 9, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-17-14.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 10, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-17-58.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 11, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-18-08.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 12, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-18-36.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 13, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-18-57.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 14, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-19-20.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 15, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-19-49.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 16, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-21-26.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 17, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-22-14.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 18, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-22-27.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 19, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-23-33.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 20, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-23-57.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 21, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-25-33.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 22, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 02-31-17.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 23, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-11-04.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 24, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-12-03.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 25, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-12-11.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 26, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-12-41.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 27, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-12-58.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 28, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-14-12.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 29, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-21-34.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 30, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-26-53.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 31, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-28-39.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 32, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-30-17.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 33, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-30-25.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 34, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-31-09.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 35, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-31-29.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 36, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-31-35.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 37, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-34-33.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 38, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-41-01.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 39, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-41-51.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 40, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-42-23.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 41, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-42-38.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 42, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-43-09.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 43, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-47-23.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 44, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-47-27.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 45, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-47-46.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 46, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-47-50.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 47, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-48-16.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 48, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-48-44.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 49, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 21-53-27.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 50, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-26-06.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 51, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-26-13.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 52, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-26-31.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 53, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-26-48.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 54, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-27-20.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 55, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-27-32.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 56, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-27-38.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 57, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-27-58.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 58, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-28-02.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 59, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-32-31.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 60, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-33-18.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 61, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-33-39.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 62, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-33-51.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 63, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-34-00.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 64, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-34-08.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 65, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-35-35.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 66, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-36-04.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 67, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-38-22.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 68, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-39-20.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." },
  { id: 69, name: "habit complet...", image: "../img/Screenshot from 2025-12-18 23-39-27.png", currentPrice: "300.cfa", oldPrice: "2000.cfa", shopName: "Ema's Shop", rating: "4.5", reviews: "734", description: "Cet habit complet est parfait pour toutes occasions. Confortable, élégant et de qualité supérieure. Disponible en différentes tailles." }
];

// Function to get product data by ID
function getProductData(id) {
  return products.find(product => product.id === id);
}

// Function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  const results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Load product data when page loads
document.addEventListener("DOMContentLoaded", function () {
  const productId = getUrlParameter("id");

  if (productId) {
    const product = getProductData(parseInt(productId));

    if (product) {
      loadProductData(product);
    } else {
      // Product not found, show error or redirect
      console.error("Product not found");
    }
  } else {
    // No product ID provided, load default or show error
    console.warn("No product ID provided");
  }
});

// Function to load product data into the page
function loadProductData(product) {
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-image").alt = product.name;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("current-price").textContent = product.currentPrice;
  document.getElementById("old-price").textContent = product.oldPrice;
  document.getElementById("shop-name").textContent = product.shopName;
  document.getElementById("rating").textContent = product.rating;
  document.getElementById("reviews").textContent = product.reviews;
  document.getElementById("product-description").textContent =
    product.description;

  // Update page title
  document.title = product.name + " - EMA-Shop";
}

// Add to cart functionality
document.addEventListener("DOMContentLoaded", function () {
  const addToCartBtn = document.querySelector(".add-to-cart");
  const buyNowBtn = document.querySelector(".buy-now");

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      const productId = getUrlParameter("id");
      // In a real app, this would add to cart
      alert("Produit ajouté au panier !");
      console.log("Added product ID " + productId + " to cart");
    });
  }

  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", function () {
      const productId = getUrlParameter("id");
      // In a real app, this would proceed to checkout
      alert("Redirection vers le paiement...");
      console.log("Proceeding to checkout for product ID " + productId);
    });
  }
});
