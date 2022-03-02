import React from "react";

const About = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-16 mx-auto">
        <h1 class="text-5xl text-black font-semibold text-center mb-8">
          About Us
        </h1>
        <div class="flex flex-wrap">
          <div class="p-4 md:w-1/2 w-full sm:w-1/4"  data-aos="fade-right">
            <div class="h-full p-4 text-justify">
              <p class="leading-relaxed mb-4">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full p-4 text-justify font-Poppins"  data-aos="fade-left">
              <p class="leading-relaxed mb-6">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
