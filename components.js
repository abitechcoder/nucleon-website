class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="hero">
      <div class="hero-cirle-1"></div>
      <div class="hero-cirle-2"></div>
      <div class="hero-rect tw-hidden lg:tw-block"></div>
      <div class="container tw-mt-[70px] tw-relative tw-z-10">
        <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8">
          <div class="tw-flex tw-flex-col tw-gap-6 lg:tw-gap-4 tw-w-[90%] tw-mx-auto lg:tw-mx-0 lg:tw-w-full">
            <h1 class="tw-text-center lg:tw-text-left">Your <span class="tw-text-secondary">Reliable</span> Engineering Solutions <span
                class="tw-text-primary tw-italic">Provider</span></h1>
            <p class="tw-text-center lg:tw-text-left"><span>Nucleon Projects Limited</span> empowers oil servicing companies, industries, and organizations
              with a complete suite of engineering solutions – from procurement and design to fabrication and
              construction.</p>
            <div class="hero-btn-div tw-mx-auto lg:tw-mx-0 tw-flex-col md:tw-flex-row">
              <a class="reach-us__button" href="contact.html">Connect with Us</a>
              <a class="profile__button" href="https://firebasestorage.googleapis.com/v0/b/nucleon-projects-f3de6.appspot.com/o/company-profile.pdf?alt=media&token=56c0063f-f4df-462e-a8ee-ea5d1aad672d">See our profile</a>
            </div>
          </div>
          <div class="tw-hidden lg:tw-grid tw-grid-cols-2 tw-grid-rows-6 tw-gap-2">
            <div
              class="tw-row-span-3 tw-rounded-xl tw-bg-[url('/assets/img/projects/wellsworth/pic2.jpeg')] tw-bg-cover tw-bg-center">
            </div>
            <div
              class="tw-row-span-4 tw-rounded-xl tw-bg-[url('/assets/img/projects/wellsworth/pic5.jpeg')] tw-bg-cover tw-bg-center">
            </div>
            <div
              class="tw-row-span-3 tw-rounded-xl tw-bg-[url('/assets/img/portfolio/piping1.jpeg')] tw-bg-cover tw-bg-center">
            </div>
            <div
              class="tw-row-span-2 tw-rounded-xl tw-bg-[url('/assets/img/portfolio/fence1.jpeg')] tw-bg-cover tw-bg-center">
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }
}

class Services extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Services</h2>
          <p>What We Do</p>
        </div>

        <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
          <div class="hover:tw-bg-primary hover:tw-cursor-pointer tw-group tw-border tw-border-primary tw-py-10 tw-px-5 tw-rounded-lg">
            <div class="icon-box tw-flex tw-flex-col tw-items-center">
              <div class="icon">
                <i class="ri-search-eye-line"></i>
              </div>
              <h4 class="tw-text-primary group-hover:tw-text-white">Procurement</h4>
              <p class="tw-text-center group-hover:tw-text-white">
                We source, procure and supply steel members given our sound
                knowledge in material science and material strength.
              </p>
            </div>
          </div>

          <div class="hover:tw-bg-primary hover:tw-cursor-pointer tw-group tw-border tw-border-primary tw-py-10 tw-px-5 tw-rounded-lg">
            <div class="icon-box tw-flex tw-flex-col tw-items-center">
              <div class="icon"><i class="ri-pencil-ruler-2-fill"></i></div>
              <h4 class="tw-text-primary group-hover:tw-text-white">Design</h4>
              <p class="tw-text-center group-hover:tw-text-white">
                We perform Process Design, Structural Design, and
                Architectural Development etc.
              </p>
            </div>
          </div>

          <div class="hover:tw-bg-primary hover:tw-cursor-pointer tw-group tw-border tw-border-primary tw-py-10 tw-px-5 tw-rounded-lg">
            <div class="icon-box tw-flex tw-flex-col tw-items-center">
              <div class="icon"><i class="ri-compasses-2-fill"></i></div>
              <h4 class="tw-text-primary group-hover:tw-text-white">Drafting</h4>
              <p class="tw-text-center group-hover:tw-text-white">
                We provide our Clients the advantage of proper engineering
                drawings and plan Construction: Fabrication of Steel
                Structures, Fabrication of Piping Spools, Fabrication and
                Erection of Warehouses, Erection of Porta Cabins etc.
              </p>
            </div>
          </div>

          <div class="hover:tw-bg-primary hover:tw-cursor-pointer tw-group tw-border tw-border-primary tw-py-10 tw-px-5 tw-rounded-lg">
            <div class="icon-box tw-flex tw-flex-col tw-items-center">
              <div class="icon">
                <i class="ri-hammer-line"></i>
              </div>
              <h4 class="tw-text-primary group-hover:tw-text-white">Construction</h4>
              <p class="tw-text-center group-hover:tw-text-white">
                Fabrication of Steel Structures, Fabrication of Piping Spools,
                Fabrication and Erection of Warehouses, Erection of Porta
                Cabins etc.
              </p>
            </div>
          </div>

          <div class="hover:tw-bg-primary hover:tw-cursor-pointer tw-group tw-border tw-border-primary tw-py-10 tw-px-5 tw-rounded-lg">
            <div class="icon-box tw-flex tw-flex-col tw-items-center">
              <div class="icon"><i class="ri-tools-fill"></i></div>
              <h4 class="tw-text-primary group-hover:tw-text-white">Project Planning</h4>
              <p class="tw-text-center group-hover:tw-text-white">
                We provide Work Scope and BEME, BOQ, project schedules,
                execution budgets to ensure our client gets maximum
                satisfaction for all investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

class About extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>About Us</h2>
          <p>Who We Are</p>
        </div>
        <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8 lg:tw-gap-10">
          <div data-aos="fade-left" data-aos-delay="100">
            <img src="./assets/img/about.jpeg" class="tw-h-full tw-w-full tw-object-center tw-rounded-xl" alt="" />
          </div>
          <div class="pt-4 pt-lg-0 content" data-aos="fade-right" data-aos-delay="100">
            <p class="tw-text-lg tw-leading-loose tw-text-justify">
              <span class="tw-font-bold tw-text-primary tw-text-xl">Nucleon Projects Limited</span> is a seasoned
              indigenous company
              incorporated in Nigeria as a Limited Liability Company, with
              Corporate Affairs Commission Registration Number: <span class="tw-font-bold">RC 1713080</span>.
              Our main business is to proffer Engineering Solutions to Oil
              Servicing Companies, Industries and Organizations. These
              solutions range from Procurement, Design, Drafting, Work
              Scoping, Cost Development, Project Planning, Fabrication,
              Refurbishment of Structures, and Warehouse Erection to Assembly
              of Porta Cabins.
            </p>
            <div class="tw-mt-6">
              <a class="custom-btn bg-blue" href="/about.html">Learn more ...</a>
            </div>
          </div>
        </div>

        <!-- Mission, Vission and Value -->
        <div class="tw-mt-10 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
          <div class="hover:tw-bg-primary hover:tw-cursor-pointer tw-group tw-border tw-border-primary tw-py-10 tw-px-5 tw-rounded-lg">
            <div class="tw-flex tw-flex-col tw-items-center tw-gap-4">
              <div class="tw-bg-secondary tw-px-6 tw-py-4 tw-rounded-lg">
                <i class="far fa-lightbulb tw-text-3xl"></i>
              </div>
              <h4 class="tw-text-primary group-hover:tw-text-white tw-text-2xl tw-font-bold">Vision</h4>
              <p class="tw-text-center group-hover:tw-text-white">
                To ensure that minute and large details that constitute
                    quality delivery are treated to customer and client
                    satisfaction, international standards and in-line with best
                    practices.
              </p>
            </div>
          </div>

          <div class="hover:tw-bg-primary hover:tw-cursor-pointer tw-group tw-border tw-border-primary tw-py-10 tw-px-5 tw-rounded-lg">
            <div class="tw-flex tw-flex-col tw-items-center tw-gap-4">
              <div class="tw-bg-secondary tw-px-6 tw-py-4 tw-rounded-lg">
                <i class="fas fa-bullseye tw-text-3xl"></i>
              </div>
              <h4 class="tw-text-primary group-hover:tw-text-white tw-text-2xl tw-font-bold">Mission</h4>
              <p class="tw-text-center group-hover:tw-text-white">
                To provide excellent start and completion to every initiated
                    project, maintain quality delivery and meet industry standard
                    in the sector.
              </p>
            </div>
          </div>

          <div class="hover:tw-bg-primary hover:tw-cursor-pointer tw-group tw-border tw-border-primary tw-py-10 tw-px-5 tw-rounded-lg">
            <div class="tw-flex tw-flex-col tw-items-center tw-gap-4">
              <div class="tw-bg-secondary tw-px-6 tw-py-4 tw-rounded-lg">
                <i class="ri-award-fill tw-text-3xl"></i>
              </div>
              <h4 class="tw-text-primary group-hover:tw-text-white tw-text-2xl tw-font-bold">Value</h4>
              <p class="tw-text-center group-hover:tw-text-white">
                We strive to build long term relationship with our clients
                    based on healthy culture and working philosophies. Ensuring
                    total commitment to customer's satisfaction and JTI delivery
                    of all services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

class Team extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="features" class="tw-bg-primary">
      <div class="container" data-aos="fade-up">
        <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8 lg:tw-gap-10 tw-place-items-center">
          <div data-aos="fade-right">
            <h3 class="tw-text-secondary tw-font-bold tw-text-xl tw-mb-3">ENGINEERING TEAM AND ASSETS</h3>
            <p class="tw-text-lg tw-text-white tw-text-justify tw-leading-loose">
              We have a team of Trained and Certified Engineers for Process
              Design, Structural Design, Architectural Development and Project
              Management. Our Engineers are skilled at the use of state of art
              facilities, modern technology and design tools in providing
              solutions and services to our Client. We have an equipped
              project management station and workshop facility to meet the
              Design and Fabrication needs of our Clients, and we have ensured
              continuous improvement on all existing asset and partnership
              with sound business associates who provide us edge in all
              service delivery.
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="100">
            <img src="./assets/img/projects/wellsworth/pic2.jpeg"
              class="tw-h-full tw-w-full tw-object-center tw-rounded-xl" alt="A team of engineers at Nucleon Projects Limited" />
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

class ContactUs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7951.287670739408!2d7.057289222163529!3d4.831070476718675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd121e8e957d%3A0x72af772ce01c15ef!2sNucleon%20Projects%20Limited!5e0!3m2!1sen!2sng!4v1638960395911!5m2!1sen!2sng"
            width="100%" height="300" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <div class="row mt-5">
          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Locations:</h4>
                <p class="tw-font-bold tw-mt-2">Head Office</p>
                <p>
                  Plot 5-7 Wirelink Close, Off Eze Gbaka-Gbaka Avenue, Woji,
                  Port Harcourt, Rivers State.
                </p>
                <p class="tw-font-bold tw-mt-4">Office</p>
                <p>Nucleon Projects Limited, Port Harcourt Refinery Complex Area 5, Port Harcourt, Rivers State.</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@nucleonprojects.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+2347014216165, +2348032648450</p>
              </div>
            </div>
          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">
            <form action="https://formsubmit.co/info@nucleonprojects.com" method="POST" role="form"
              class="php-email-form">
              <input type="hidden" name="_next" value="https://nucleonprojects.com/thanks.html" />
              <input type="hidden" name="_captcha" value="false" />
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div class="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}


class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="footer-info">
              <a href="index.html" class="logo"><img src="assets/img/logo162.png" alt=""
                  style="height: 50px; margin-bottom: 20px" class="img-fluid" /></a>
              <p>
                <ul class="tw-mb-4">
                  <p><strong>Head Office</strong></p>
                  <li>
                    Plot 5-7 Wirelink Close,<br />
                    Off Eze Gbaka Gbaka Avenue, <br />
                    Woji, Port Harcourt.<br />
                  </li>
                  <p class="tw-mt-4"><strong>Office</strong></p>
                  <li>Nucleon Projects Limited, <br />Port Harcourt Refinery Complex Area 5, <br/> Port Harcourt</li>
                </ul>
                <strong>Phone:</strong> +2347014216165, +2348032648450<br />
                <strong>Email:</strong> info@nucleonprojects.com<br />
              </p>
              <!-- <div class="social-links mt-3">
                  <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                  <a href="#" class="facebook"
                    ><i class="bx bxl-facebook"></i
                  ></a>
                  <a href="#" class="instagram"
                    ><i class="bx bxl-instagram"></i
                  ></a>
                  <a href="#" class="google-plus"
                    ><i class="bx bxl-skype"></i
                  ></a>
                  <a href="#" class="linkedin"
                    ><i class="bx bxl-linkedin"></i
                  ></a>
                </div> -->
            </div>
          </div>

          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="index.html">Home</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="about.html">About us</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="services.html">Services</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="projects.html">Projects</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="services.html">Procurement</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="services.html">Design</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="services.html">Drafting</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="services.html">Construction</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="services.html">Project Planning</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Nucleon Projects</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
    `;
  }
}

class GetInTouch extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="tw-h-[400px] lg:tw-h-[300px] tw-bg-[url('/assets/img/hero-bg.png')] tw-bg-cover tw-bg-blend-multiply tw-bg-primary tw-bg-bottom tw-grid tw-place-items-center tw-mb-16">
          <div class="tw-w-[90%] lg:tw-w-[70%] tw-flex tw-flex-col tw-gap-4 tw-items-center">
            <p class="tw-text-center tw-text-base tw-text-white tw-mt-4 tw-uppercase">Get in touch</p>
              <h1 class="tw-text-3xl tw-font-bold tw-text-white tw-text-center">We are ready to deliver exceptional engineering solutions, procurement, and fabrication services to you today!</h1>
              <a class="tw-bg-secondary tw-rounded tw-py-3 tw-px-6 tw-font-bold tw-text-md tw-text-primary hover:tw-bg-white hover:tw-text-primary" href="/contact.html">Connect with Us</a>
          </div>
    </div>
    `
  }
}

customElements.define("app-hero", Hero);
customElements.define("app-services", Services);
customElements.define("app-about", About);
customElements.define("app-team", Team);
customElements.define("app-contact", ContactUs);
customElements.define("app-footer", Footer);
customElements.define("app-getintouch", GetInTouch);
