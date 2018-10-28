<template>
  <div id="app">
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="./assets/telenor_logo.png" itemprop="logo" alt="Telenor" style="max-height: 45px;">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link to="/aboutus" class="nav-link">Create new</router-link>
              </li> -->
            </ul>
            <form class="form-inline mt-2 mt-md-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    <main role="main">

      <router-view/>
      
      <footer class="text-light mt-5" style="background-color: #0c1026;">
        <div class="container">
          <div class="row">
            <div class="col-md-12 py-4">
              <span class="">&copy; 2017-2018 Example Company, Inc. </span>

                <a href="#" class="pull-right"> &middot;  No Privacy </a> 
                <a href="#" class="pull-right"> &middot;  No Terms </a>
                <span class="clearfix"></span>
              <hr style="border-top: 3px solid rgba(255, 255, 255, 0.52);">
            </div>
          </div>
        </div>
      </footer>
    </main>     
  </div>
</template>

<style lang="scss">
body {
  color: #5a5a5a;
}

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}
.featurette-divider {
  margin: 5rem 0;
}

.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;
}

.display-5 {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
}
.display-6 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
}
.display-7 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>
