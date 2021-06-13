
const Nav =
`<section>
    <nav class="navbar navbar-expand-lg nav-bg d-lg-none" >
      <div class="navbar-brand logo">
        <img src="./imgs/logo.png" alt="logo" width="30px">
      </div>
      <div class="menu-icon">
        <i class="fas fa-ellipsis-v px-3"></i>
      </div>
  </nav>   
  <div class="navbar-nav">
      <section class="greeting">
      <h6 class="container-lg">Welcome<span>&#44;</span><span class="current-user"></span>	&#33;</h6>
      </section>
    <ul>
    <li class="nav-fav"> 
      <input type="radio" name="nav-opt" id="nav-fav" checked />
      <label for="nav-fav"> 
      <i class="fas fa-heart px-2"></i>
      Explore Music</label>
    </li>
    <li  class="nav-account">
      <input type="radio" name="nav-opt" id="nav-account"/>
      <label for="nav-account">
      <i class="fas fa-user px-2"></i>
      Account Setting
      </label>
    </li>
    <li class="sign-out">
     <input type="radio" name="nav-opt" id="nav-out"/>
      <label for="nav-signout">
      <i class="fas fa-power-off px-2"></i>
      Sign Out
      </label>
  </li>
  <div class="nav-slider"></div>
  </ul>
  </div>
</section>`

export {Nav as default}

