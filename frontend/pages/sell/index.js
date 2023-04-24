import Link from "next/link";

import Footer from "@/components/footer";
import CustomHead from "@/components/head";
import Header from "@/components/header";

import styles from "@/styles/page.module.css";

import Select from "react-select";
import { apiHost } from "@/components/apiHost";
import { use, useState } from "react";

export default function Sell({ cars }) {
  // console.log(cars);
  const [selectedCarModels, setSelectedCarModels] = useState([]);
  const [selectedBrandOption, setSelectedBrandOption] = useState(null);
  const [selectedModelOption, setSelectedModelOption] = useState(null);

  const carBrands = cars.map((car) => {
    return { value: car.brand, label: car.brand };
  });

  const carModelsList = cars.reduce((brands, car) => {
    brands[car.brand] = car.models;
    return brands;
  });

  const setBrandModels = (selectedBrandOption) => {
    setSelectedBrandOption(selectedBrandOption);
    setSelectedCarModels(
      carModelsList[selectedBrandOption.value].map((model) => {
        return { value: model, label: model };
      })
    );
    setSelectedModelOption(null);
  };

  const setCarModel = (selectedModelOption) => {
    setSelectedModelOption(selectedModelOption);
  };

  return (
    <>
      <CustomHead pageTitle={"Vinde"}></CustomHead>

      <Header></Header>

      <div className="page_wrap">
        <div className="page_content">
          <div>
            <h3>Publică o mașină</h3>
            <form>
              <div className={styles.input_group}>
              
              <div className={styles.input_container}>
                <label>Brand</label>
                <Select
                  value={selectedBrandOption}
                  options={carBrands}
                  onChange={setBrandModels}
                  className="input_select"
                  classNamePrefix="input_select"
                  placeholder="Selectează..."
                  unstyled
                />
              </div>
              <div className={styles.input_container}>
                <label>Model</label>
                <Select
                  value={selectedModelOption}
                  options={selectedCarModels}
                  onChange={setCarModel}
                  className="input_select"
                  classNamePrefix="input_select"
                  placeholder="Selectează..."
                  noOptionsMessage={()=>"Selecteaza un brand"}
                  unstyled

                />
              </div>
              </div>
              
              
              
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(apiHost + "/data/carlist");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      cars: data.body.data,
    },
  };
}
