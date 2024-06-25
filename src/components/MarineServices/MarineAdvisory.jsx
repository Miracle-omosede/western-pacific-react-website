import React from "react";
import shipImage from "../../assets/cargo-container.jpg";

const MarineAdvisory = () => {
  return (
    <div>
      {" "}
      <div className="col-span-12 flex flex-col w-full h-auto mt-10 px-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="uppercase font-bold text-3xl py-4 ">
            Marine Advisory Services
          </h1>
        </div>

        {/* write up image */}
        <div className="w-full h-[300px]">
          <img
            src={shipImage}
            alt="construction image"
            className="w-full object-cover h-[300px]"
          />
        </div>

        {/* general introduction write up */}
        <section className="py-4">
          <p className="text-lg">
          With years of experience in ensuring safe, timely and cost
                effective services for all marine and offshore operations,
                Western Pacific Solutions is well equipped to advise and handle
                the following:
          </p>
        </section>

        {/* our activities  */}
        <section>
          <h1 className="uppercase font-bold text-3xl py-4 ">Our activities</h1>
          <p>
            <ul className="text-lg md:text-xl">
              <li className="border-b py-2">
                {" "}
                Construction Services
              </li>
              <li className="border-b py-2">
                Remodelling Services
              </li>
              <li className="border-b py-2">
                {" "}
                Renovation
              </li>
              <li className="border-b py-2">
                General Supply Services
              </li>
              <li className="border-b py-2">Procurement Services</li>
              <li className="border-b py-2">
                Consultancy & Advisory Service
              </li>
            </ul>
          </p>
        </section>

        {/* our clients */}
        <section className="mt-10">
          <h1 className="uppercase font-bold text-3xl py-4 ">Our clients </h1>
          <p>
            <ul className="text-lg md:text-xl">
              <li class>
                {" "}
                Kwara State Ministry of Agriculture and Rural Development, Kwara
              </li>
              <li class>
                Shipside Drydock Limited, Port Harcourt
              </li>
              <li class>
                {" "}
                Baobab Microfinance Bank, Lagos
              </li>
              <li class>
                Olivet Baptist High School, Oyo
              </li>
              <li className="border-b py-2">
                Alert Microfinance Bank, Lagos (Prospective)
              </li>
              <li className="border-b py-2" >
                Taj Bank, Abuja (Prospective)
              </li>
              <li className="border-b py-2" >
                Deep Frontline Shippers, Uyo (Prospective)
              </li>
            </ul>
          </p>
        </section>

        {/*completed projects*/}
        <section className="mt-10">
          <h1 className="uppercase font-bold text-3xl py-4 ">
            completed projects{" "}
          </h1>
          <p>
            <ul className="text-lg md:text-xl">
              <li className="border-b py-2">
                {" "}
                <span>
                  Construction of 6 units of classrooms for Comprehensive
                  Secondary School Ajase, Kwara State
                </span>
                <span className="text-xs block font-bold">2020-2021</span>
              </li>
              <li className="border-b py-2">
                {" "}
                <span>
                  {" "}
                  Construction of Office Building for Shipside Drydock, Port
                  Harcourt. Subcontractor to Damen Civil
                </span>
                <span className="text-xs block font-bold">2021</span>
              </li>
              <li className="border-b py-2" >
                {" "}
                <span>
                  {" "}
                  Construction and Remodelling of Baobab Microfinance Bank
                  Limited,{" "}
                </span>
                <span className="text-sm block font-bold">
                  <table>
                    <tr>
                      <td>Aba Branch</td>
                      <td>2022</td>
                      {/* <td>Lokoja Branch</td>
                        <td>Gwamaja Branch Kano</td>
                        <td>France Road Branch</td>
                        <td>Uyo Branch</td> */}
                    </tr>

                    <tr>
                      <td>Lokoja Branch</td>
                      <td>2022 - 2023</td>
                    </tr>

                    <tr>
                      <td>Gwamaja Branch Kano</td>
                      <td>2023</td>
                    </tr>

                    <tr>
                      <td>France Road Branch</td>
                      <td>2023</td>
                    </tr>

                    <tr>
                      <td>Uyo Branch</td>
                      <td>2023</td>
                    </tr>

                    <tr>
                      {/* <td>2022</td>
                        <td>2022 - 2023</td>
                        <td>2023</td>
                        <td>2023</td>
                        <td>2023</td> */}
                    </tr>
                  </table>
                </span>
              </li>
            </ul>
          </p>
        </section>

        {/*ongoing projects*/}
        <section className="mt-10">
          <h1 className="uppercase font-bold text-3xl py-4 ">
            ongoing projects{" "}
          </h1>
          <p>
            <ul className="text-lg md:text-xl">
              <li className="border-b py-2">
                {" "}
                <span>
                  Construction of 5-bedroom duplex @ Umuchieze Mbaise Imo state
                </span>
                <span className="text-xs block font-bold">2023</span>
              </li>
              <li className="border-b py-2">
                {" "}
                <span>
                  Construction of 5-bedroom duplex @ Nnono Oboro Ikwuano Abia
                  state{" "}
                </span>
                <span className="text-xs block font-bold">2023</span>
              </li>
              <li className="border-b py-2">
                {" "}
                <span>
                  {" "}
                  Construction of 4-bedroom duplex at Restoration Estate, Igbo
                  Etche Rivers state{" "}
                </span>
                <span className="text-xs block font-bold">2023</span>
              </li>
              <li className="border-b py-2">
                {" "}
                <span>
                  Construction of 6-bedroom duplex @ Ngboko Okpulo, Aba Abia
                  state{" "}
                </span>
                <span className="text-xs block font-bold">2023</span>
              </li>
              <li className="border-b py-2">
                {" "}
                <span>
                  Construction and Remodelling of Baobab Microfinance Bank
                  Limited, Benin Branch{" "}
                </span>
                <span className="text-xs block font-bold">2023</span>
              </li>
              <li className="border-b py-2" >
                {" "}
                <span>
                  Construction of 100-seater Pavillion for Basketball Court,
                  Olivet Baptist High School, Oyo
                </span>
                <span className="text-xs block font-bold">2023</span>
              </li>
            </ul>
          </p>
        </section>

        {/*projects in the pipeline*/}
        <section className="mt-10">
          <h1 className="uppercase font-bold text-3xl py-4 ">
            Projects in the pipeline{" "}
          </h1>
          <p>
            <ul className="text-lg md:text-xl">
              <li className="border-b py-2">
                {" "}
                <span>
                  Construction of Office Buildings, Staff Quarters, Training
                  Centers for Deep Frontline Shippers, Uyo.
                </span>
              </li>
              <li className="border-b py-2">
                {" "}
                <span>
                  Construction and Remodelling of Office Building for Alert
                  Microfinance Bank Limited, Lagos.
                </span>
              </li>
              <li className="border-b py-2" >
                {" "}
                <span>
                  {" "}
                  Construction and Remodelling of Office Building for TAJ Bank
                  Limited{" "}
                </span>
              </li>
            </ul>
          </p>
        </section>

        {/* image gallery  */}
        <section></section>
      </div>
    </div>
  );
};

export default MarineAdvisory;
