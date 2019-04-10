<template>
  <div class="layout">
    <div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <!-- .site-mobile-menu -->

    <div class="site-navbar-wrap">
      <div class="site-navbar-top">
        <div class="container py-3">
          <div class="row align-items-center">
            <div class="col-6">
              <a
                href="https://www.facebook.com/wilderthanthewindcreations"
                class="p-2 pl-0"
                ><span class="icon-facebook"></span
              ></a>
              <a
                href="https://www.instagram.com/creativeescapesyeg"
                class="p-2 pl-0"
                ><span class="icon-instagram"></span
              ></a>
            </div>
            <div class="col-6">
              <div class="d-flex ml-auto">
                <a href="#" class="d-flex align-items-center ml-auto mr-4">
                  <span class="icon-phone mr-2"></span>
                  <span class="d-none d-md-inline-block"
                    >+1 (604) 123-4567</span
                  >
                </a>
                <a href="#" class="d-flex align-items-center">
                  <span class="icon-envelope mr-2"></span>
                  <span class="d-none d-md-inline-block"
                    >wilderthanthewindcreations@gmail.com</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site-navbar">
        <div class="container py-1">
          <div class="row align-items-center">
            <div class="col-2">
              <h1 class="mb-0 site-logo"><a href="index.html"></a></h1>
            </div>
            <div class="col-10">
              <nav class="site-navigation text-right" role="navigation">
                <div class="container">
                  <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                    <a
                      href="#"
                      class="site-menu-toggle js-menu-toggle text-white"
                      ><span class="icon-menu h3"></span
                    ></a>
                  </div>

                  <ul class="site-menu js-clone-nav d-none d-lg-block">
                    <li><g-link to="/">Home</g-link></li>
                    <li><g-link to="/about">About Us</g-link></li>
                    <li><g-link to="/classes">Classes</g-link></li>
                    <li><g-link to="/blog">Blog</g-link></li>
                    <li><g-link to="/contact">Contact Us</g-link></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <slot />

    <footer class="site-footer border-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="row mb-5">
              <div class="col-md-12">
                <h3 class="footer-heading mb-4">Navigation</h3>
              </div>
              <div class="col-md-6 col-lg-6">
                <ul class="list-unstyled">
                  <li><g-link to="/">Home</g-link></li>
                  <li><g-link to="/classes">Classes</g-link></li>
                  <li><g-link to="/blog">Blog</g-link></li>
                </ul>
              </div>
              <div class="col-md-6 col-lg-6">
                <ul class="list-unstyled">
                  <li><g-link to="/about">About Us</g-link></li>
                  <li><g-link to="/contact">Contact Us</g-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4"></div>

          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="row">
              <div class="col-md-12">
                <h3 class="footer-heading mb-4">Follow Us</h3>

                <div>
                  <a
                    href="https://www.facebook.com/wilderthanthewindcreations"
                    class="pl-0 pr-3"
                    ><span class="icon-facebook"></span
                  ></a>
                  <a
                    href="https://www.instagram.com/creativeescapesyeg"
                    class="pl-3 pr-3"
                    ><span class="icon-instagram"></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-5 mt-5 text-center"></div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
.site-blocks-cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}
.site-blocks-cover.overlay {
  position: relative;
}
.site-blocks-cover.overlay:before {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
}
.site-blocks-cover,
.site-blocks-cover .row {
  min-height: 600px;
  height: calc(100vh);
}
.site-blocks-cover.inner-page,
.site-blocks-cover.inner-page .row {
  min-height: 600px;
  height: calc(80vh);
}
.site-blocks-cover .sub-text {
  font-size: 1.1rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.2em;
}
.site-blocks-cover h1 {
  font-family: "Shadows into Light", cursive;
  font-weight: 50;
  color: #fff;
  font-size: 3rem;
}
.site-blocks-cover h1 strong {
  font-weight: 800;
}
@media (min-width: 768px) {
  .site-blocks-cover h1 {
    font-size: 5rem;
    margin-top: 15px;
  }
}
.site-blocks-cover p {
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.5;
}
.site-blocks-cover .intro-text {
  font-size: 16px;
  line-height: 1.5;
}
</style>
