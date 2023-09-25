
import logo from './assets/logo.png'

function App() {

  return (
    <>
    <div className="app">
      <header className="header">
          <img src={logo} alt="logo" className="logo" />
          <button className="dd-toggle">File</button>
          <button className="dd-toggle">View</button>
          <button className="dd-toggle">New</button>
          <button className="dd-toggle">
              <i className="fas fa-crown dd-toggle__icon"></i>
          </button>
          <button className="dd-toggle">
              <i className="fas fa-bell toggle__icon"></i>
          </button>
          <button className="dd-toggle">
              <img className="dd-toggle__img" src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100" alt="User photo" />
              <span className="dd-toggle__text">James O.</span>
          </button>
      </header>
      <div className="app__container">
          <div className="sidebar">
              <section className="menu">
                  <button className="menu__button">
                      <i className="fas fa-layer-group menu__icon"></i>
                      <span className="menu__text">Template</span>
                  </button>
                  <button className="menu__button menu__button--active">
                      <i className="fas fa-image menu__icon"></i>
                      <span className="menu__text">Images</span>
                  </button>
                  <button className="menu__button">
                      <i className="fas fa-font menu__icon"></i>
                      <span className="menu__text">Text/Font</span>
                  </button>
                  <button className="menu__button">
                      <i className="fas fa-shapes menu__icon"></i>
                      <span className="menu__text">Shape</span>
                  </button>
              </section>
              <footer className="footer">
                  <small className="copyright">&copy; 2023 SocialEditor. All rights reserved</small>
              </footer>
          </div>
          <section className="panel">
              <div className="panel__top">
                  <h1 className="first-heading">Images</h1>
                  <i className="fas fa-angle-double-left panel__collapse-icon"></i>
              </div>
              <div className="panel__images">
                  <img className="panel__img" src="https://images.unsplash.com/photo-1543096222-72de739f7917?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=280&q=100" alt="Uploaded image" />

                  <img className="panel__img" src="https://images.unsplash.com/photo-1475598322381-f1b499717dda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&h=280&q=100" alt="Uploaded image" />
                  
                  <img className="panel__img" src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=280&q=100" alt="Uploaded image" />
                  
                  <img className="panel__img" src="https://images.unsplash.com/photo-1615749190340-34c7c3b16784?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=280&q=100" alt="Uploaded image" />
                  
                  <img className="panel__img" src="https://images.unsplash.com/photo-1615707547992-93435f1e7f13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=280&q=100" alt="Uploaded image" />
              
                  <button className="panel__btn">
                      <i className="fas fa-plus panel__upload-icon"></i>
                  </button>
              </div>
          </section>
          <main className="main">
              <div className="info-bar">
                  <section className="breadcrumbs">
                      <a href="#" className="breadcrumbs__link">Facebook posts</a>
                      <i className="fas fa-angle-right breadcrumbs__icon"></i>
                      <span className="breadcrumbs__name">Happy-hour-friday</span>
                  </section>
                  <button className="button">Publish</button>
              </div>

              <div className="artboard">
                  <section className="canvas">
                      <img className="canvas__bg-img" src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=2134&q=100" alt="Background image" />
                      <img className="canvas__fg-img" src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=1453&q=85" alt="Foreground image" />
                      <div className="canvas__circle"></div>
                      <div className="canvas__circle"></div>
                      <div className="canvas__circle"></div>
                      <div className="canvas__circle"></div>
                  </section>
                  <section className="tools">
                      <button className="tool tool-active">
                          <i className="fas fa-crop-alt tool__icon"></i>
                      </button>

                      <button className="tool">
                          <i className="fas fa-object-group tool__icon"></i>
                      </button>

                      <button className="tool">
                          <i className="fas fa-pen tool__icon"></i>
                      </button>

                      <button className="tool">
                          <i className="fas fa-trash tool__icon"></i>
                      </button>
                  </section>
              </div>
          </main>
      </div>
    </div>
    </>
  )
}

export default App
