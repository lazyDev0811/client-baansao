<template>
  <div>
    <header class="header-main">
      <div class="nav-container">
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
                      <div
                        class="d-inline-block d-lg-none ml-md-0 mr-auto py-3"
                      >
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
      </div>
    </header>
    <slot />
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
@import url("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css");

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 61.226px auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
