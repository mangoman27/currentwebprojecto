class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
	  
	  
	  
	  	<div class="header">
	<div class="headerlinks">
	
	
		  	  <a  class="a2" >Pages:</a>

	  <a  class="a"  href="index.html">Home</a>
	  <a  class="a"  href="blog.html">Blog</a>
	  <a  class="a"  href="gallery.html">Gallery</a>
	  
	  <a  style="float:right" class="a2">
	<script src="scripts/date.js" type="text/javascript"></script>

	</a>
			  
	
	
	
	</div>
	</div>

	  
	  
	  
	  



	  
	  
	  

	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
    `;
  }
}

customElements.define('header-component', Header);

-----------------------------------------------------------------

	<center>
	  		<marquee style="color:white;font-size:22px;"  class="header" behavior="alternate" scrollamount="25">Website recently crawled, Now appearing in google searches!</marquee>
			</center>
	<br>
	
	-----------------------------------------------------------------
