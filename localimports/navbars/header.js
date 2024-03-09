class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
		

	  
	  	<div class="header">
	<div class="headerlinks">
	
	
		  	  <a  class="a2" >Pages:</a>

	  <a  class="a"  href="/index.html">Home</a>
	  <a  class="a"  href="/blog">Blog</a>
	  <a  class="a"  href="/gallery/index.html">Gallery</a>
	  <a  style="float:right" class="a2 bob"> Site Updated: 08/03/24 </a>

			  
	
	
	
	</div>
	</div>

	
		

	
	
	<br>

	  
	  
	  



	  
	  
	  

	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
    `;
  }
}

customElements.define('header-component', Header);

