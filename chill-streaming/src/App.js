import React, { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Home');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // Sample data
  const featuredMovie = {
    title: "The Crown",
    description: "Follow the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    rating: 8.7,
    year: 2023,
    duration: "1h 45m",
    genres: ["Drama", "History", "Biography"],
    backdrop: "https://images.unsplash.com/photo-1489599508756-1de2f8f29c6c?w=1200&h=600&fit=crop"
  };

  const movieCategories = [
    {
      title: "Trending Now",
      movies: [
        { 
          id: 1, 
          title: "Ocean Documentary", 
          poster: "https://images.unsplash.com/photo-1489599508756-1de2f8f29c6c?w=300&h=400&fit=crop", 
          rating: 8.5,
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          description: "Amazing ocean documentary showcasing marine life.",
          duration: "52:30"
        },
        { 
          id: 2, 
          title: "Mountain Adventure", 
          poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop", 
          rating: 7.8,
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          description: "Epic mountain climbing adventure.",
          duration: "1:45:20"
        },
        { 
          id: 3, 
          title: "City Lights", 
          poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop", 
          rating: 9.1,
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          description: "Urban exploration and city nightlife.",
          duration: "1:32:15"
        },
        { 
          id: 4, 
          title: "Forest Tales", 
          poster: "https://images.unsplash.com/photo-1489599508756-1de2f8f29c6c?w=300&h=400&fit=crop", 
          rating: 8.2,
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          description: "Mystical forest adventure story.",
          duration: "2:12:45"
        },
        { 
          id: 5, 
          title: "Space Journey", 
          poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop", 
          rating: 7.9,
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
          description: "Epic space exploration adventure.",
          duration: "2:05:30"
        }
      ]
    },
    {
      title: "Action Movies",
      movies: [
        { 
          id: 6, 
          title: "Thunder Strike", 
          poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop", 
          rating: 8.0,
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
          description: "High-octane action thriller.",
          duration: "1:55:20"
        },
        { 
          id: 7, 
          title: "Speed Chase", 
          poster: "https://images.unsplash.com/photo-1489599508756-1de2f8f29c6c?w=300&h=400&fit=crop", 
          rating: 7.5,
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
          description: "Fast-paced car chase action.",
          duration: "1:42:10"
        },
        { 
          id: 8, 
          title: "Combat Zone", 
          poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop", 
          rating: 8.8,
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
          description: "Military action adventure.",
          duration: "2:20:15"
        }
      ]
    },
    {
      title: "Comedy",
      movies: [
        { 
          id: 11, 
          title: "Laugh Out Loud", 
          poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop", 
          rating: 7.3,
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          description: "Hilarious comedy special.",
          duration: "1:25:30"
        },
        { 
          id: 12, 
          title: "Funny Business", 
          poster: "https://images.unsplash.com/photo-1489599508756-1de2f8f29c6c?w=300&h=400&fit=crop", 
          rating: 8.1,
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          description: "Comedy about business world.",
          duration: "1:38:15"
        }
      ]
    }
  ];

  const navItems = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsPlaying(true);
    setShowControls(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Inline styles
  const styles = {
    container: {
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      background: 'linear-gradient(to bottom, #000, rgba(0,0,0,0.8), transparent)',
      padding: '1rem 2rem'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logo: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#dc2626'
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      gap: '2rem',
      margin: 0,
      padding: 0
    },
    navItem: {
      cursor: 'pointer',
      padding: '0.5rem 0',
      borderBottom: '2px solid transparent',
      transition: 'all 0.3s'
    },
    navItemActive: {
      borderBottomColor: '#dc2626',
      color: '#fff'
    },
    rightNav: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    userProfile: {
      width: '32px',
      height: '32px',
      backgroundColor: '#dc2626',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    heroSection: {
      height: '100vh',
      position: 'relative',
      backgroundImage: `url(${featuredMovie.backdrop})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, #000, rgba(0,0,0,0.7), transparent)'
    },
    heroContent: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      padding: '0 2rem',
      maxWidth: '50%'
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    heroMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem',
      fontSize: '1rem'
    },
    starRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    genreList: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '2rem'
    },
    genreTag: {
      padding: '0.5rem 1rem',
      backgroundColor: 'rgba(75, 85, 99, 0.8)',
      borderRadius: '2rem',
      fontSize: '0.875rem'
    },
    heroDescription: {
      color: '#d1d5db',
      marginBottom: '2rem',
      lineHeight: '1.6',
      maxWidth: '600px'
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem'
    },
    playButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '#fff',
      color: '#000',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    infoButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: 'rgba(75, 85, 99, 0.8)',
      color: '#fff',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    main: {
      position: 'relative',
      zIndex: 10,
      marginTop: '-8rem',
      paddingBottom: '5rem'
    },
    section: {
      marginBottom: '3rem',
      padding: '0 2rem'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem'
    },
    movieRow: {
      display: 'flex',
      gap: '1rem',
      overflowX: 'auto',
      paddingBottom: '1rem'
    },
    movieCard: {
      flexShrink: 0,
      width: '250px',
      cursor: 'pointer',
      transition: 'transform 0.3s'
    },
    movieCardHover: {
      transform: 'scale(1.05)'
    },
    moviePoster: {
      width: '100%',
      height: '375px',
      objectFit: 'cover',
      borderRadius: '0.5rem'
    },
    movieInfo: {
      padding: '1rem',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
      borderRadius: '0 0 0.5rem 0.5rem',
      opacity: 0,
      transition: 'opacity 0.3s'
    },
    movieInfoVisible: {
      opacity: 1
    },
    movieTitle: {
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    footer: {
      backgroundColor: '#1f2937',
      padding: '3rem 2rem',
      marginTop: '5rem'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    footerSection: {
      marginBottom: '2rem'
    },
    footerTitle: {
      fontWeight: '600',
      marginBottom: '1rem'
    },
    footerList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    footerLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      display: 'block',
      padding: '0.25rem 0',
      transition: 'color 0.3s'
    },
    footerBottom: {
      borderTop: '1px solid #374151',
      marginTop: '2rem',
      paddingTop: '2rem',
      textAlign: 'center',
      color: '#9ca3af'
    },
    modal: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.9)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    modalContent: {
      position: 'relative',
      width: '90%',
      maxWidth: '1200px',
      height: '80%'
    },
    closeButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      zIndex: 110,
      backgroundColor: 'rgba(0,0,0,0.5)',
      border: 'none',
      borderRadius: '50%',
      padding: '0.5rem',
      cursor: 'pointer',
      color: '#fff',
      fontSize: '1.5rem'
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    },
    videoControls: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0.5), transparent)',
      padding: '1.5rem'
    },
    controlsInfo: {
      marginBottom: '1rem'
    },
    controlsTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    controlsDescription: {
      color: '#d1d5db',
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    },
    controlsMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      fontSize: '0.875rem',
      color: '#9ca3af'
    },
    controlButtons: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem'
    },
    controlButton: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      border: 'none',
      borderRadius: '50%',
      padding: '0.75rem',
      cursor: 'pointer',
      color: '#fff',
      transition: 'background-color 0.3s'
    },
    progressBar: {
      width: '100%',
      height: '4px',
      backgroundColor: '#4b5563',
      borderRadius: '2px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      width: '25%',
      backgroundColor: '#dc2626',
      borderRadius: '2px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <h1 style={styles.logo}>CHILL</h1>
            <ul style={styles.navList}>
              {navItems.map((item) => (
                <li
                  key={item}
                  style={{
                    ...styles.navItem,
                    ...(activeCategory === item ? styles.navItemActive : {}),
                  }}
                  onClick={() => setActiveCategory(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.rightNav}>
            <span style={{ cursor: 'pointer', fontSize: '1.25rem' }}>🔍</span>
            <div style={styles.userProfile}>
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>U</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div>
            <h1 style={styles.heroTitle}>{featuredMovie.title}</h1>
            <div style={styles.heroMeta}>
              <div style={styles.starRating}>
                <span style={{ color: '#fbbf24' }}>⭐</span>
                <span>{featuredMovie.rating}</span>
              </div>
              <span>{featuredMovie.year}</span>
              <span>{featuredMovie.duration}</span>
            </div>
            <div style={styles.genreList}>
              {featuredMovie.genres.map((genre) => (
                <span key={genre} style={styles.genreTag}>
                  {genre}
                </span>
              ))}
            </div>
            <p style={styles.heroDescription}>{featuredMovie.description}</p>
            <div style={styles.buttonGroup}>
              <button style={styles.playButton}>
                <span>▶️</span>
                <span>Play</span>
              </button>
              <button style={styles.infoButton}>
                <span>ℹ️</span>
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main style={styles.main}>
        {movieCategories.map((category) => (
          <section key={category.title} style={styles.section}>
            <h2 style={styles.sectionTitle}>{category.title}</h2>
            <div style={styles.movieRow}>
              {category.movies.map((movie) => (
                <div
                  key={movie.id}
                  style={styles.movieCard}
                  onClick={() => handleMovieClick(movie)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '0.5rem' }}>
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      style={styles.moviePoster}
                    />
                    <div style={styles.movieInfo}>
                      <h3 style={styles.movieTitle}>{movie.title}</h3>
                      <div style={styles.starRating}>
                        <span style={{ color: '#fbbf24' }}>⭐</span>
                        <span style={{ fontSize: '0.875rem' }}>{movie.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Company</h3>
            <ul style={styles.footerList}>
              <li><a href="#" style={styles.footerLink}>About Us</a></li>
              <li><a href="#" style={styles.footerLink}>Careers</a></li>
              <li><a href="#" style={styles.footerLink}>Press</a></li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Support</h3>
            <ul style={styles.footerList}>
              <li><a href="#" style={styles.footerLink}>Help Center</a></li>
              <li><a href="#" style={styles.footerLink}>Contact Us</a></li>
              <li><a href="#" style={styles.footerLink}>Terms of Service</a></li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Content</h3>
            <ul style={styles.footerList}>
              <li><a href="#" style={styles.footerLink}>Movies</a></li>
              <li><a href="#" style={styles.footerLink}>TV Shows</a></li>
              <li><a href="#" style={styles.footerLink}>Originals</a></li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Connect</h3>
            <ul style={styles.footerList}>
              <li><a href="#" style={styles.footerLink}>Facebook</a></li>
              <li><a href="#" style={styles.footerLink}>Twitter</a></li>
              <li><a href="#" style={styles.footerLink}>Instagram</a></li>
            </ul>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>&copy; 2024 Chill Streaming. All rights reserved.</p>
        </div>
      </footer>

      {/* Video Player Modal */}
      {selectedMovie && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button style={styles.closeButton} onClick={closeModal}>
              ✕
            </button>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <video
                key={selectedMovie.id}
                style={styles.video}
                controls={false}
                autoPlay={isPlaying}
                muted={isMuted}
              >
                <source src={selectedMovie.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {showControls && (
                <div style={styles.videoControls}>
                  <div style={styles.controlsInfo}>
                    <h2 style={styles.controlsTitle}>{selectedMovie.title}</h2>
                    <p style={styles.controlsDescription}>{selectedMovie.description}</p>
                    <div style={styles.controlsMeta}>
                      <div style={styles.starRating}>
                        <span style={{ color: '#fbbf24' }}>⭐</span>
                        <span>{selectedMovie.rating}</span>
                      </div>
                      <span>{selectedMovie.duration}</span>
                    </div>
                  </div>

                  <div style={styles.controlButtons}>
                    <button style={styles.controlButton} onClick={togglePlayPause}>
                      {isPlaying ? '⏸️' : '▶️'}
                    </button>
                    <button style={styles.controlButton}>⏮️</button>
                    <button style={styles.controlButton}>⏭️</button>
                    <button style={styles.controlButton} onClick={toggleMute}>
                      {isMuted ? '🔇' : '🔊'}
                    </button>
                  </div>

                  <div style={styles.progressBar}>
                    <div style={styles.progressFill}></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;