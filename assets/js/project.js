document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");
  let projectCover = document.getElementById("projectCover");
  let projectGallery = document.getElementById("projectGallery");

  // Example product data
  const projects = {
    1: {
      title: "Fabrication of 1200bbl tank",
      status: "Completed",
      client: "Wellsworth Energy Limited",
      coverVideoUrl: "",
      coverImageUrl: "/assets/img/projects/wellsworth/pic9.jpeg",
      gallery: [
        "/assets/img/projects/wellsworth/pic9.jpeg",
        "/assets/img/projects/wellsworth/pic8.jpeg",
        "/assets/img/projects/wellsworth/pic1.jpeg",
        "/assets/img/projects/wellsworth/pic2.jpeg",
        "/assets/img/projects/wellsworth/pic3.jpeg",
        "/assets/img/projects/wellsworth/pic4.jpeg",
        "/assets/img/projects/wellsworth/pic5.jpeg",
        "/assets/img/projects/wellsworth/pic6.jpeg",
        "/assets/img/projects/wellsworth/pic7.jpeg",
      ],
    },
    2: {
      title: "Fabrication of Office Cabin",
      status: "Completed",
      client: "Candix Engineering Nigeria Limited",
      coverVideoUrl: "",
      coverImageUrl: "/assets/img/portfolio/porta-cabin2.jpeg",
      gallery: [
        "/assets/img/portfolio/cabin-fabricate3.png",
        "/assets/img/portfolio/porta-cabin2.jpeg",
        "/assets/img/portfolio/cabin-fabricate4.png",
        "/assets/img/portfolio/porta-cabin1.jpeg",
      ],
    },
    3: {
      title: "Braithwaite Water Tank Erection",
      status: "Completed",
      client: "Joprestep Water Solution",
      coverVideoUrl: "",
      coverImageUrl: "/assets/img/portfolio/tank4.png",
      gallery: [
        "/assets/img/portfolio/tank1.png",
        "/assets/img/portfolio/tank2.png",
        "/assets/img/portfolio/tank3.png",
        "/assets/img/portfolio/tank4.png",
      ],
    },
    4: {
      title: "Piping works",
      status: "Completed",
      client: "Librod Energy Services",
      coverVideoUrl: "",
      coverImageUrl: "/assets/img/portfolio/piping1.jpeg",
      gallery: [
        "/assets/img/portfolio/piping1.jpeg",
        "/assets/img/portfolio/piping2.jpeg",
        "/assets/img/portfolio/piping3.jpeg",
        "/assets/img/portfolio/piping4.jpeg",
      ],
    },
    5: {
      title:
        "Complete Fabrication and Installation of 4” Sectional Line Replacement",
      status: "Completed",
      client: "Librod Energy Services",
      coverVideoUrl: "",
      coverImageUrl: "/assets/img/portfolio/complete-sectional1.png",
      gallery: [
        "/assets/img/portfolio/complete-sectional1.png",
        "/assets/img/portfolio/complete-sectional2.png",
        "/assets/img/portfolio/complete-sectional3.png",
        "/assets/img/portfolio/complete-sectional4.png",
      ],
    },
    6: {
      title: 'Replacement of section of 4" ground lines',
      status: "Completed",
      client: "Librod Energy Services",
      coverVideoUrl: "",
      coverImageUrl: "/assets/img/portfolio/section4c-3.png",
      gallery: [
        "/assets/img/portfolio/section4-1.png",
        "/assets/img/portfolio/section4-4.png",
        "/assets/img/portfolio/section4c-1.png",
        "/assets/img/portfolio/section4c-3.png",
        "/assets/img/portfolio/section4c-4.png",
      ],
    },
    7: {
      title: "Fabrication of 500bbl horizontal tanks",
      status: "Completed",
      client: "Clinton Oil Field",
      coverVideoUrl: "",
      coverImageUrl: "/assets/img/projects/clinton-oil/pic8.jpeg",
      gallery: [
        "/assets/img/projects/clinton-oil/pic8.jpeg",
        "/assets/img/projects/clinton-oil/pic9.jpeg",
        "/assets/img/projects/clinton-oil/pic10.jpeg",
        "/assets/img/projects/clinton-oil/pic1.jpeg",
        "/assets/img/projects/clinton-oil/pic2.jpeg",
        "/assets/img/projects/clinton-oil/pic3.jpeg",
        "/assets/img/projects/clinton-oil/pic4.jpeg",
        "/assets/img/projects/clinton-oil/pic5.jpeg",
        "/assets/img/projects/clinton-oil/pic6.jpeg",
        "/assets/img/projects/clinton-oil/pic7.jpeg",
      ],
    },
    8: {
      title: "Fabrication Works",
      status: "Completed",
      client: "Librod Energy Services",
      coverVideoUrl: "/assets/img/projects/librod/video.mp4",
      coverImageUrl: "",
      gallery: [
        "/assets/img/projects/librod/1.jpeg",
        "/assets/img/projects/librod/2.jpeg",
        "/assets/img/projects/librod/3.jpeg",
        "/assets/img/projects/librod/4.jpeg",
        "/assets/img/projects/librod/5.jpeg",
        "/assets/img/projects/librod/6.jpeg",
        "/assets/img/projects/librod/7.jpeg",
        "/assets/img/projects/librod/8.jpeg",
        "/assets/img/projects/librod/9.jpeg",
        "/assets/img/projects/librod/10.jpeg",
      ],
    },
    9: {
      title: "Fabrication and Installation of Test Bench Equipment Housing",
      status: "Completed",
      client: "IKOSH Nigeria Limited",
      coverVideoUrl: "",
      coverImageUrl: "/assets/img/projects/ikosh/4.jpg",
      gallery: [
        "/assets/img/projects/ikosh/1.jpg",
        "/assets/img/projects/ikosh/2.jpg",
        "/assets/img/projects/ikosh/3.jpg",
        "/assets/img/projects/ikosh/4.jpg",
      ],
    },
  };

  // Function to load project details dynamically
  function loadProjectDetails(projectId) {
    const project = projects[projectId];
    if (project) {
      document.getElementById("projectTitle").textContent = project.title;
      document.getElementById("projectStatus").textContent = project.status;
      document.getElementById("projectClient").textContent = project.client;
      if (project.coverVideoUrl !== "") {
        projectCover.innerHTML = `
        <video class="tw-w-full tw-h-[400px]" controls>
            <source src=${project.coverVideoUrl} type="video/mp4">
          </video>
        `;
      } else {
        projectCover.innerHTML = `
        <img src=${project.coverImageUrl} class="tw-w-full tw-h-[400px] tw-object-cover tw-object-center" alt="Project Image">
        `;
      }

      projectGallery.innerHTML = project.gallery.map((item) => {
        return `
          <div class="col-lg-4 col-md-6 portfolio-item">
          <div class="portfolio-wrap">
            <img src=${item} class="img-fluid" alt=${project.title} />
          </div>
        </div>
          `;
      });
    } else {
      document.getElementById("projectTitle").textContent = "Project not found";
      document.getElementById("projectStatus").textContent = "";
      document.getElementById("projectClient").textContent = "";
      document.getElementById("projectCoverImage").src = "";
      document.getElementById("projectCoverVideo").src = "";
    }
  }

  // Call the function to load product details
  loadProjectDetails(projectId);
});
