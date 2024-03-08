class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header" alt="this is actuall an footer but looks like an header due to the css class" >
	<center>	<p>©2023-2024 Lusitania.eu.org</p>
		</center>
	</div>
	<br>
	
	
	
	
    `;
  }
}

customElements.define('footer-component', Footer);