class Test extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
	  
					
			<a class="list2 a2" style="font-size:27px;">Pictures</a>
			<hr>
			<a class="list" style="" href="/gallery/pages/23j-24d-Istanbul-Turkey.html">Istanbul visit</a>

	
	
	
	
    `;
  }
}

customElements.define('gal-nav', Test);