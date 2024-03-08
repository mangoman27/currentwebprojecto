class Test extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
	  
					
			<a class="list2 a2" style="font-size:27px;">Blog Posts</a>
			<hr>
			<a class="list2 a2" style="">2024</a>
			<a class="list" style="" href="/blog/pages/mar-24.html">March</a>
			<a class="list" style="" href="/blog/pages/feb-24.html">February</a>
			<a class="list" style="" href="/blog/pages/jan-24.html">January</a>
	  
			<a class="list2 a2" style="">2023</a>
			<a class="list" style="" href="/blog/pages/dec-23.html">December</a>

	
	
	
	
    `;
  }
}

customElements.define('blog-nav', Test);