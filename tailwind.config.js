module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'nimbus':'#162e5b',
        'single-card':'#2051B1',
        'secundary': '#F1F1F2',
        'nimbusDark': '#1A3D82',
        'yellow-tag': '#C79411',
        'sidebar' : '#18BAFB'
      },
      animation:{
        slideUp: 'top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideIn: 'right 0.5s cubic-bezier(0.250,0.460,0.450,0.940) both',
        slideOut: 'slide-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'
      },
      keyframes:{
        slideUp: {
          '0%':{
            transform: 'translate-y-0'
          },
          '100%':{
            transform: 'translate-y-1'
          }
        },
        right:{
          '0%':{
            transform:'translate-x-0',
            opacity:0
          },
          '25%':{
            transform:'translate-x-6',
            opacity:0.25
          },
          '50%':{
            transform:'translate-x-12',
            opacity:0.50
          },
          '75%':{
            transform:'translate-x-20',
            opacity:0.75
          },
          '100%':{
            transform:'translate-x-24',
            opacity:1
          }
        },
        'slide-left':{
          '0%':{
            transform:'-translate-x-0',
          },
          '100%':{
            transform:'-translate-x-40',
            opacity:0
          }
        }
      },
      width:{
        '18': '70px'
      },
      height:{
        '18': '70px',
        'imagen' : '551px'
      },
      fontSize:{
        'block':'0.7rem'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/icons/icons-bloques/image_default.png')",
      }
    },
  },
  plugins: [],
}
