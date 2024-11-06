import React from "react";

const About = () => {
  return (
    <div className="about-section py-12 h-screen">
      <div className="container pb-20">
        <div className="container">
          <div className="text-center my-10">
            <h1>
              About <span className="text-primary">US</span>
            </h1>
            <p>
              Magni quod blanditiis non minus sed aut voluptatum illum quisquam
              aspernatur ullam vel beatae rerum ipsum voluptatibus
            </p>
          </div>

          <div className="center gap-3 pb-20">
            <div className="w-1/2">
              <img src="images/about-img.png" alt="" />
            </div>

            <div className="w-1/2">
              <h2 className="text-3xl"> We Are Finexo </h2>

              <p className="my-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All
                <br />
                Molestiae odio earum non qui cumque provident voluptates,
                repellendus exercitationem, possimus at iste corrupti officiis
                unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam
                ab omnis quasi expedita.
              </p>

              <button className="btn btn-primary px-10"> Read More </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
