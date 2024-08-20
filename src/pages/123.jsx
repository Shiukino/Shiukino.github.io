import { useState, useRef, useEffect } from "react";

import ToggleButton from "../components/ToggleButton";
import UpdateQuantity from "../components/UpdateQuantity";
import Items from "../components/Item";
import {
  buildingMaterials,
  electronics,
  flammableMaterials,
  infoItems,
  storageContainer,
  householdMaterials,
  valuables,
  drinks,
  maps,
  tools,
  energyElements,
  medicalSupplies,
  others,
  injurytreatment,
  specialEquipment,
} from "../components/DataMaterials";
import "../styles/Materials.css";

export default function MaterialsList() {
  const [materials, setMaterials] = useState({
    buildingMaterials,
    electronics,
    flammableMaterials,
    infoItems,
    storageContainer,
    householdMaterials,
    valuables,
    drinks,
    maps,
    tools,
    energyElements,
    medicalSupplies,
    others,
    injurytreatment,
    specialEquipment,
  });

  const [airFilteringUnit, setAirFilteringUnit] = useState(true);
  const handleAirFilteringUnit = () => {
    setMaterials((prevState) => {
      const updatedOthers = UpdateQuantity(
        "Filter",
        airFilteringUnit ? -5 : 5
      )(prevState.others);
      const updatedElectronics = UpdateQuantity(
        "PFilter",
        airFilteringUnit ? -5 : 5
      )(prevState.electronics);
      const updatedBuildingMaterials = UpdateQuantity(
        "MTube",
        airFilteringUnit ? -3 : 3
      )(prevState.buildingMaterials);
      // 25.000 dollars, lv3 generator, lv3 vents
      return {
        ...prevState,
        others: updatedOthers,
        electronics: updatedElectronics,
        buildingMaterials: updatedBuildingMaterials,
      };
    });
    setAirFilteringUnit(!airFilteringUnit);
  };

  const [bitcoinFarm1, setBitcoinFarm1] = useState(true);
  const handleBitcoinFarm1 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "Tplug",
        bitcoinFarm1 ? -5 : 5
      )(
        UpdateQuantity(
          "VPX",
          bitcoinFarm1 ? -1 : 1
        )(
          UpdateQuantity(
            "Cord",
            bitcoinFarm1 ? -10 : 10
          )(
            UpdateQuantity(
              "PSU",
              bitcoinFarm1 ? -10 : 10
            )(
              UpdateQuantity(
                "CPUFan",
                bitcoinFarm1 ? -15 : 15
              )(prevState.electronics)
            )
          )
        )
      );
      // Level 2 Intelligence Center
      return {
        ...prevState,
        electronics: updatedElectronics,
      };
    });
    setBitcoinFarm1(!bitcoinFarm1);
  };

  const [bitcoinFarm2, setBitcoinFarm2] = useState(true);
  const handleBitcoinFarm2 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "CPUFan",
        bitcoinFarm2 ? -15 : 15
      )(
        UpdateQuantity(
          "PSU",
          bitcoinFarm2 ? -10 : 10
        )(
          UpdateQuantity(
            "PCB",
            bitcoinFarm2 ? -15 : 15
          )(
            UpdateQuantity(
              "Relay",
              bitcoinFarm2 ? -5 : 5
            )(
              UpdateQuantity(
                "PFilter",
                bitcoinFarm2 ? -2 : 2
              )(prevState.electronics)
            )
          )
        )
      );
      // Level 3 Generator
      return {
        ...prevState,
        electronics: updatedElectronics,
      };
    });
    setBitcoinFarm2(!bitcoinFarm2);
  };

  const [bitcoinFarm3, setBitcoinFarm3] = useState(true);
  const handleBitcoinFarm3 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "CPUFan",
        bitcoinFarm3 ? -25 : 25
      )(
        UpdateQuantity("EMotor", bitcoinFarm3 ? -10 : 10)(prevState.electronics)
      );

      const updatedBuildingMaterials = UpdateQuantity(
        "Tube",
        bitcoinFarm3 ? -15 : 15
      )(
        UpdateQuantity(
          "Gauge",
          bitcoinFarm3 ? -10 : 10
        )(prevState.buildingMaterials)
      );
      const updatedEnergyElements = UpdateQuantity(
        "TankBattery",
        bitcoinFarm3 ? -1 : 1
      )(prevState.energyElements);
      // Level 1 Solar Power, Level 3 Water Collector
      return {
        ...prevState,
        electronics: updatedElectronics,
        buildingMaterials: updatedBuildingMaterials,
        energyElements: updatedEnergyElements,
      };
    });
    setBitcoinFarm3(!bitcoinFarm3);
  };

  const [boozeGenerator, setBoozeGenerator] = useState(true);
  const handleBoozeGenerator = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "Mparts",
        boozeGenerator ? -2 : 2
      )(
        UpdateQuantity(
          "Gauge",
          boozeGenerator ? -2 : 2
        )(
          UpdateQuantity(
            "Tube",
            boozeGenerator ? -4 : 4
          )(
            UpdateQuantity(
              "Therm",
              boozeGenerator ? -2 : 2
            )(
              UpdateQuantity(
                "Hose",
                boozeGenerator ? -5 : 5
              )(prevState.buildingMaterials)
            )
          )
        )
      );

      const updatedElectronics = UpdateQuantity(
        "Helix",
        boozeGenerator ? -3 : 3
      )(prevState.electronics);
      const updatedTools = UpdateQuantity(
        "PGW",
        boozeGenerator ? -1 : 1
      )(prevState.tools);
      // Level 3 Water Collector, Level 3 Nutrition Unit
      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
        electronics: updatedElectronics,
        tools: updatedTools,
      };
    });
    setBoozeGenerator(!boozeGenerator);
  };

  const [defectiveWall1, setDefectiveWall1] = useState(true);
  const handleDefectiveWall1 = () => {
    setMaterials((prevState) => {
      const updatedMaps = UpdateQuantity(
        "Factory",
        defectiveWall1 ? -1 : 1
      )(prevState.maps);
      // Level 1 Medstation, Level 1 Water Collector
      return {
        ...prevState,
        maps: updatedMaps,
      };
    });
    setDefectiveWall1(!defectiveWall1);
  };

  const [defectiveWall2, setDefectiveWall2] = useState(true);
  const handleDefectiveWall2 = () => {
    setMaterials((prevState) => {
      const updatedOthers = UpdateQuantity(
        "Fleece",
        defectiveWall2 ? -1 : 1
      )(prevState.others);

      return {
        ...prevState,
        others: updatedOthers,
      };
    });
    setDefectiveWall2(!defectiveWall2);
  };

  const [defectiveWall3, setDefectiveWall3] = useState(true);
  const handleDefectiveWall3 = () => {
    setMaterials((prevState) => {
      const updatedOthers = UpdateQuantity(
        "Fleece",
        defectiveWall3 ? -1 : 1
      )(prevState.others);

      return {
        ...prevState,
        others: updatedOthers,
      };
    });
    setDefectiveWall3(!defectiveWall3);
  };

  const [defectiveWall4, setDefectiveWall4] = useState(true);
  const handleDefectiveWall4 = () => {
    setMaterials((prevState) => {
      const updatedOthers = UpdateQuantity(
        "Fleece",
        defectiveWall4 ? -1 : 1
      )(prevState.others);
      const updatedTools = UpdateQuantity(
        "Sledgehammer",
        defectiveWall4 ? -1 : 1
      )(prevState.tools);

      return {
        ...prevState,
        others: updatedOthers,
        tools: updatedTools,
      };
    });
    setDefectiveWall4(!defectiveWall4);
  };

  const [defectiveWall5, setDefectiveWall5] = useState(true);
  const handleDefectiveWall5 = () => {
    setMaterials((prevState) => {
      const updatedTools = UpdateQuantity(
        "MScissors",
        defectiveWall5 ? -1 : 1
      )(UpdateQuantity("TSet", defectiveWall5 ? -1 : 1)(prevState.tools));
      const updatedOthers = UpdateQuantity(
        "Fleece",
        defectiveWall5 ? -1 : 1
      )(prevState.others);

      return {
        ...prevState,
        tools: updatedTools,
        others: updatedOthers,
      };
    });
    setDefectiveWall5(!defectiveWall5);
  };

  const [defectiveWall6, setDefectiveWall6] = useState(true);
  const handleDefectiveWall6 = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "Hose",
        defectiveWall6 ? -2 : 2
      )(
        UpdateQuantity(
          "Ducttape",
          defectiveWall6 ? -1 : 1
        )(
          UpdateQuantity(
            "Mparts",
            defectiveWall6 ? -5 : 5
          )(
            UpdateQuantity(
              "Xeno",
              defectiveWall6 ? -1 : 1
            )(prevState.buildingMaterials)
          )
        )
      );
      const updatedTools = UpdateQuantity(
        "TSet",
        defectiveWall6 ? -1 : 1
      )(UpdateQuantity("Elite", defectiveWall6 ? -1 : 1)(prevState.tools));
      const updatedElectronics = UpdateQuantity(
        "Wires",
        defectiveWall6 ? -2 : 2
      )(UpdateQuantity("Bulb", defectiveWall6 ? -2 : 2)(prevState.electronics));

      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
        tools: updatedTools,
        electronics: updatedElectronics,
      };
    });
    setDefectiveWall6(!defectiveWall6);
  };

  const [generator1, setGenerator1] = useState(true);
  const handleGenerator1 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "Plug",
        generator1 ? -1 : 1
      )(prevState.electronics);
      // 100,000 Roubles, Level 1 Security
      return {
        ...prevState,
        electronics: updatedElectronics,
      };
    });
    setGenerator1(!generator1);
  };

  const [generator2, setGenerator2] = useState(true);
  const handleGenerator2 = () => {
    setMaterials((prevState) => {
      const updatedTools = UpdateQuantity(
        "Bulbex",
        generator2 ? -1 : 1
      )(prevState.tools);
      const updatedElectronics = UpdateQuantity(
        "Relay",
        generator2 ? -5 : 5
      )(
        UpdateQuantity(
          "EMotor",
          generator2 ? -1 : 1
        )(UpdateQuantity("Wires", generator2 ? -15 : 15)(prevState.electronics))
      );
      // Level 2 Security, Level 2 Vents
      return {
        ...prevState,
        electronics: updatedElectronics,
        tools: updatedTools,
      };
    });
    setGenerator2(!generator2);
  };

  const [generator3, setGenerator3] = useState(true);
  const handleGenerator3 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "PSU",
        generator3 ? -5 : 5
      )(
        UpdateQuantity(
          "Relay",
          generator3 ? -6 : 6
        )(
          UpdateQuantity(
            "EMotor",
            generator3 ? -3 : 3
          )(
            UpdateQuantity("Plug", generator3 ? -10 : 10)(prevState.electronics)
          )
        )
      );
      const updatedBuildingMaterials = UpdateQuantity(
        "Mparts",
        generator3 ? -7 : 7
      )(prevState.buildingMaterials);
      // Mechanic LL3, Level 3 Security, Level 3 Vents
      return {
        ...prevState,
        electronics: updatedElectronics,
        buildingMaterials: updatedBuildingMaterials,
      };
    });
    setGenerator3(!generator3);
  };

  const [gym, setGym] = useState(true);
  const handleGym = () => {
    setMaterials((prevState) => {
      const updatedTools = UpdateQuantity(
        "TSet",
        gym ? -1 : 1
      )(UpdateQuantity("MScissors", gym ? -1 : 1)(prevState.tools));
      const updatedElectronics = UpdateQuantity(
        "EDrill",
        gym ? -1 : 1
      )(prevState.electronics);
      const updatedBuildingMaterials = UpdateQuantity(
        "Nuts",
        gym ? -3 : 3
      )(
        UpdateQuantity(
          "Bolts",
          gym ? -3 : 3
        )(UpdateQuantity("Tape", gym ? -1 : 1)(prevState.buildingMaterials))
      );
      const updatedFlammableMaterials = UpdateQuantity(
        "WD_40",
        gym ? -1 : 1
      )(prevState.flammableMaterials);
      // Level 6 Defective wall, Level 2 Illumination, Level 2 Vents
      return {
        ...prevState,
        tools: updatedTools,
        electronics: updatedElectronics,
        buildingMaterials: updatedBuildingMaterials,
        flammableMaterials: updatedFlammableMaterials,
      };
    });
    setGym(!gym);
  };

  const [hallOfFame1, setHallOfFame1] = useState(true);
  const handleHallOfFame1 = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "Tape",
        hallOfFame1 ? -2 : 2
      )(
        UpdateQuantity(
          "Nails",
          hallOfFame1 ? -5 : 5
        )(prevState.buildingMaterials)
      );
      const updatedElectronics = UpdateQuantity(
        "Bulb",
        hallOfFame1 ? -5 : 5
      )(prevState.electronics);
      const updatedValuables = UpdateQuantity(
        "Cat",
        hallOfFame1 ? -1 : 1
      )(prevState.valuables);
      const updatedOthers = UpdateQuantity(
        "Fleece",
        hallOfFame1 ? -5 : 5
      )(prevState.others);
      const updatedTools = UpdateQuantity(
        "RPliers",
        hallOfFame1 ? -1 : 1
      )(prevState.tools);
      // Mechanic LL2
      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
        electronics: updatedElectronics,
        valuables: updatedValuables,
        others: updatedOthers,
        tools: updatedTools,
      };
    });
    setHallOfFame1(!hallOfFame1);
  };

  const [hallOfFame2, setHallOfFame2] = useState(true);
  const handleHallOfFame2 = () => {
    setMaterials((prevState) => {
      const updatedInfoItems = UpdateQuantity(
        "Manual",
        hallOfFame2 ? -1 : 1
      )(prevState.infoItems);
      const updatedTools = UpdateQuantity(
        "Elite",
        hallOfFame2 ? -1 : 1
      )(UpdateQuantity("TSet", hallOfFame2 ? -1 : 1)(prevState.tools));
      const updatedValuables = UpdateQuantity(
        "Rooster",
        hallOfFame2 ? -1 : 1
      )(prevState.valuables);
      const updatedElectronics = UpdateQuantity(
        "ESlamp",
        hallOfFame2 ? -10 : 10
      )(prevState.electronics);
      const updatedBuildingMaterials = UpdateQuantity(
        "Screws",
        hallOfFame2 ? -6 : 6
      )(
        UpdateQuantity(
          "Ducttape",
          hallOfFame2 ? -3 : 3
        )(
          UpdateQuantity(
            "Xeno",
            hallOfFame2 ? -2 : 2
          )(
            UpdateQuantity(
              "Poxeram",
              hallOfFame2 ? -2 : 2
            )(prevState.buildingMaterials)
          )
        )
      );

      return {
        ...prevState,
        infoItems: updatedInfoItems,
        tools: updatedTools,
        valuables: updatedValuables,
        electronics: updatedElectronics,
        buildingMaterials: updatedBuildingMaterials,
      };
    });
    setHallOfFame2(!hallOfFame2);
  };

  const [hallOfFame3, setHallOfFame3] = useState(true);
  const handleHallOfFame3 = () => {
    setMaterials((prevState) => {
      const updatedTools = UpdateQuantity(
        "Master",
        hallOfFame3 ? -1 : 1
      )(prevState.tools);
      const updatedElectronics = UpdateQuantity(
        "EDrill",
        hallOfFame3 ? -1 : 1
      )(
        UpdateQuantity(
          "ESlamp",
          hallOfFame3 ? -15 : 15
        )(
          UpdateQuantity(
            "Tplug",
            hallOfFame3 ? -3 : 3
          )(UpdateQuantity("Cord", hallOfFame3 ? -5 : 5)(prevState.electronics))
        )
      );
      const updatedValuables = UpdateQuantity(
        "Lion",
        hallOfFame3 ? -1 : 1
      )(prevState.valuables);
      const updatedBuildingMaterials = UpdateQuantity(
        "KEK",
        hallOfFame3 ? -3 : 3
      )(
        UpdateQuantity(
          "Mparts",
          hallOfFame3 ? -15 : 15
        )(prevState.buildingMaterials)
      );

      return {
        ...prevState,
        tools: updatedTools,
        electronics: updatedElectronics,
        valuables: updatedValuables,
        buildingMaterials: updatedBuildingMaterials,
      };
    });
    setHallOfFame3(!hallOfFame3);
  };

  const [heating1, setHeating1] = useState(true);
  const handleHeating1 = () => {
    setMaterials((prevState) => {
      const updatedFlammableMaterials = UpdateQuantity(
        "Matches",
        heating1 ? -2 : 2
      )(prevState.flammableMaterials);
      // 25,000 Roubles
      return {
        ...prevState,
        flammableMaterials: updatedFlammableMaterials,
      };
    });
    setHeating1(!heating1);
  };

  const [heating2, setHeating2] = useState(true);
  const handleHeating2 = () => {
    setMaterials((prevState) => {
      const updatedFlammableMaterials = UpdateQuantity(
        "DFuel",
        heating2 ? -3 : 3
      )(
        UpdateQuantity(
          "HMatches",
          heating2 ? -2 : 2
        )(
          UpdateQuantity(
            "Crickent",
            heating2 ? -3 : 3
          )(prevState.flammableMaterials)
        )
      );
      // 50,000 Roubles, Endurance Level 1, Level 1 Vents
      return {
        ...prevState,
        flammableMaterials: updatedFlammableMaterials,
      };
    });
    setHeating2(!heating2);
  };

  const [heating3, setHeating3] = useState(true);
  const handleHeating3 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "Helix",
        heating3 ? -8 : 8
      )(
        UpdateQuantity(
          "Wires",
          heating3 ? -8 : 8
        )(UpdateQuantity("Relay", heating3 ? -4 : 4)(prevState.electronics))
      );
      const updatedBuildingMaterials = UpdateQuantity(
        "MTube",
        heating3 ? -2 : 2
      )(prevState.buildingMaterials);
      // Ragman LL2, Level 2 Generator, Level 2 Workbench
      return {
        ...prevState,
        electronics: updatedElectronics,
        buildingMaterials: updatedBuildingMaterials,
      };
    });
    setHeating3(!heating3);
  };

  const [illumination1, setIllumination1] = useState(true);
  const handleIllumination1 = () => {
    setMaterials((prevState) => {
      const updatedFlammableMaterials = UpdateQuantity(
        "Crickent",
        illumination1 ? -1 : 1
      )(prevState.flammableMaterials);
      // 10,000 Roubles
      return {
        ...prevState,
        flammableMaterials: updatedFlammableMaterials,
      };
    });
    setIllumination1(!illumination1);
  };

  const [illumination2, setIllumination2] = useState(true);
  const handleIllumination2 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "Bulb",
        illumination2 ? -14 : 14
      )(
        UpdateQuantity("Wires", illumination2 ? -10 : 10)(prevState.electronics)
      );
      // Level 1 Generator
      return {
        ...prevState,
        electronics: updatedElectronics,
      };
    });
    setIllumination2(!illumination2);
  };

  const [illumination3, setIllumination3] = useState(true);
  const handleIllumination3 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "Caps",
        illumination3 ? -7 : 7
      )(
        UpdateQuantity(
          "ESlamp",
          illumination3 ? -12 : 12
        )(
          UpdateQuantity("Wires", illumination3 ? -6 : 6)(prevState.electronics)
        )
      );
      // Mechanic LL2, Level 2 Generator, Level 1 Workbench
      return {
        ...prevState,
        electronics: updatedElectronics,
      };
    });
    setIllumination3(!illumination3);
  };

  const [intelligenceCenter1, setIntelligenceCenter1] = useState(true);
  const handleIntelligenceCenter1 = () => {
    setMaterials((prevState) => {
      const updatedMaps = UpdateQuantity(
        "Factory",
        intelligenceCenter1 ? -1 : 1
      )(prevState.maps);
      const updatedInfoItems = UpdateQuantity(
        "IntelligenceF",
        intelligenceCenter1 ? -1 : 1
      )(
        UpdateQuantity(
          "Maps",
          intelligenceCenter1 ? -1 : 1
        )(prevState.infoItems)
      );
      // Level 2 Security ,Level 2 Vents
      return {
        ...prevState,
        maps: updatedMaps,
        infoItems: updatedInfoItems,
      };
    });
    setIntelligenceCenter1(!intelligenceCenter1);
  };

  const [intelligenceCenter2, setIntelligenceCenter2] = useState(true);
  const handleIntelligenceCenter2 = () => {
    setMaterials((prevState) => {
      const updatedInfoItems = UpdateQuantity(
        "IntelligenceF",
        intelligenceCenter2 ? -3 : 3
      )(
        UpdateQuantity(
          "FlashD",
          intelligenceCenter2 ? -3 : 3
        )(prevState.infoItems)
      );
      const updatedElectronics = UpdateQuantity(
        "Cord",
        intelligenceCenter2 ? -7 : 7
      )(
        UpdateQuantity(
          "HDD",
          intelligenceCenter2 ? -4 : 4
        )(prevState.electronics)
      );
      // Mechanic LL2, Attention Level 3, Level 3 Security, Level 3 Medstation, Level 3 Nutrition Unit
      return {
        ...prevState,
        infoItems: updatedInfoItems,
        electronics: updatedElectronics,
      };
    });
    setIntelligenceCenter2(!intelligenceCenter2);
  };

  const [intelligenceCenter3, setIntelligenceCenter3] = useState(true);
  const handleIntelligenceCenter3 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "Mcable",
        intelligenceCenter3 ? -5 : 5
      )(
        UpdateQuantity(
          "SG_C10",
          intelligenceCenter3 ? -2 : 2
        )(
          UpdateQuantity(
            "GPSA",
            intelligenceCenter3 ? -1 : 1
          )(
            UpdateQuantity(
              "VPX",
              intelligenceCenter3 ? -2 : 2
            )(prevState.electronics)
          )
        )
      );
      const updatedInfoItems = UpdateQuantity(
        "MFD",
        intelligenceCenter3 ? -5 : 5
      )(
        UpdateQuantity("SMT", intelligenceCenter3 ? -2 : 2)(prevState.infoItems)
      );
      // Prapor LL3, Level 3 Workbench, Level 3 Generator
      return {
        ...prevState,
        electronics: updatedElectronics,
        infoItems: updatedInfoItems,
      };
    });
    setIntelligenceCenter3(!intelligenceCenter3);
  };

  const [lavatory1, setLavatory1] = useState(true);
  const handleLavatory1 = () => {
    setMaterials((prevState) => {
      const updatedHouseholdMaterials = UpdateQuantity(
        "TPaper",
        lavatory1 ? -1 : 1
      )(
        UpdateQuantity(
          "Toothpaste",
          lavatory1 ? -1 : 1
        )(
          UpdateQuantity(
            "Soap",
            lavatory1 ? -1 : 1
          )(prevState.householdMaterials)
        )
      );
      const updatedTools = UpdateQuantity(
        "Awl",
        lavatory1 ? -1 : 1
      )(prevState.tools);
      // 2,000 Roubles
      return {
        ...prevState,
        householdMaterials: updatedHouseholdMaterials,
        tools: updatedTools,
      };
    });
    setLavatory1(!lavatory1);
  };

  const [lavatory2, setLavatory2] = useState(true);
  const handleLavatory2 = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "KEK",
        lavatory2 ? -1 : 1
      )(
        UpdateQuantity(
          "Hose",
          lavatory2 ? -3 : 3
        )(
          UpdateQuantity(
            "Screws",
            lavatory2 ? -5 : 5
          )(prevState.buildingMaterials)
        )
      );
      const updatedElectronics = UpdateQuantity(
        "EDrill",
        lavatory2 ? -1 : 1
      )(prevState.electronics);
      const updatedTools = UpdateQuantity(
        "Krasavch",
        lavatory2 ? -2 : 2
      )(prevState.tools);
      // Level 1 Water Collector, Level 1 Vents
      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
        electronics: updatedElectronics,
        tools: updatedTools,
      };
    });
    setLavatory2(!lavatory2);
  };

  const [lavatory3, setLavatory3] = useState(true);
  const handleLavatory3 = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "Xeno",
        lavatory3 ? -3 : 3
      )(
        UpdateQuantity(
          "Hose",
          lavatory3 ? -6 : 6
        )(
          UpdateQuantity(
            "Gauge",
            lavatory3 ? -2 : 2
          )(prevState.buildingMaterials)
        )
      );
      const updatedTools = UpdateQuantity(
        "TSet",
        lavatory3 ? -1 : 1
      )(prevState.tools);
      // Level 2 Vents, Level 2 Water Collector
      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
        tools: updatedTools,
      };
    });
    setLavatory3(!lavatory3);
  };

  const [library, setLibrary] = useState(true);
  const handleLibrary = () => {
    setMaterials((prevState) => {
      const updatedInfoItems = UpdateQuantity(
        "BakeEzy",
        library ? -1 : 1
      )(
        UpdateQuantity(
          "SDiary",
          library ? -2 : 2
        )(
          UpdateQuantity(
            "Diary",
            library ? -2 : 2
          )(UpdateQuantity("Manual", library ? -5 : 5)(prevState.infoItems))
        )
      );
      const updatedValuables = UpdateQuantity(
        "Chainlet",
        library ? -2 : 2
      )(UpdateQuantity("Horse", library ? -1 : 1)(prevState.valuables));
      // 400,000 Roubles, Hideout management Level 5, Level 3 Rest Space
      return {
        ...prevState,
        infoItems: updatedInfoItems,
        valuables: updatedValuables,
      };
    });
    setLibrary(!library);
  };

  const [medstation1, setMedstation1] = useState(true);
  const handleMedstation1 = () => {
    setMaterials((prevState) => {
      const updatedMedicalSupplies = UpdateQuantity(
        "Syringe",
        medstation1 ? -1 : 1
      )(
        UpdateQuantity(
          "Meds",
          medstation1 ? -1 : 1
        )(
          UpdateQuantity(
            "Vitam",
            medstation1 ? -1 : 1
          )(prevState.medicalSupplies)
        )
      );
      const updatedInjurytreatment = UpdateQuantity(
        "Bandage",
        medstation1 ? -2 : 2
      )(prevState.injurytreatment);
      // 50,000 Roubles
      return {
        ...prevState,
        medicalSupplies: updatedMedicalSupplies,
        injurytreatment: updatedInjurytreatment,
      };
    });
    setMedstation1(!medstation1);
  };

  const [medstation2, setMedstation2] = useState(true);
  const handleMedstation2 = () => {
    setMaterials((prevState) => {
      const updatedMedicalSupplies = UpdateQuantity(
        "NaCl",
        medstation2 ? -3 : 3
      )(
        UpdateQuantity(
          "Bloodset",
          medstation2 ? -2 : 2
        )(
          UpdateQuantity(
            "MedTools",
            medstation2 ? -3 : 3
          )(prevState.medicalSupplies)
        )
      );
      const updatedInjurytreatment = UpdateQuantity(
        "Esmarch",
        medstation2 ? -5 : 5
      )(prevState.injurytreatment);

      return {
        ...prevState,
        medicalSupplies: updatedMedicalSupplies,
        injurytreatment: updatedInjurytreatment,
      };
    });
    setMedstation2(!medstation2);
  };

  const [medstation3, setMedstation3] = useState(true);
  const handleMedstation3 = () => {
    setMaterials((prevState) => {
      const updatedMedicalSupplies = UpdateQuantity(
        "OScope",
        medstation3 ? -1 : 1
      )(
        UpdateQuantity(
          "NaCl",
          medstation3 ? -4 : 4
        )(
          UpdateQuantity(
            "LEDX",
            medstation3 ? -1 : 1
          )(prevState.medicalSupplies)
        )
      );

      return {
        ...prevState,
        medicalSupplies: updatedMedicalSupplies,
      };
    });
    setMedstation3(!medstation3);
  };

  const [nutritionUnit1, setNutritionUnit1] = useState(true);
  const handleNutritionUnit1 = () => {
    setMaterials((prevState) => {
      const updatedHouseholdMaterials = UpdateQuantity(
        "Salt",
        nutritionUnit1 ? -1 : 1
      )(prevState.householdMaterials);
      const updatedElectronics = UpdateQuantity(
        "Cord",
        nutritionUnit1 ? -1 : 1
      )(
        UpdateQuantity("Relay", nutritionUnit1 ? -2 : 2)(prevState.electronics)
      );

      return {
        ...prevState,
        householdMaterials: updatedHouseholdMaterials,
        electronics: updatedElectronics,
      };
    });
    setNutritionUnit1(!nutritionUnit1);
  };

  const [nutritionUnit2, setNutritionUnit2] = useState(true);
  const handleNutritionUnit2 = () => {
    setMaterials((prevState) => {
      const updatedTools = UpdateQuantity(
        "Wrench",
        nutritionUnit2 ? -4 : 4
      )(prevState.tools);
      const updatedBuildingMaterials = UpdateQuantity(
        "Hose",
        nutritionUnit2 ? -2 : 2
      )(prevState.buildingMaterials);
      const updatedHouseholdMaterials = UpdateQuantity(
        "Alkaline",
        nutritionUnit2 ? -2 : 2
      )(prevState.householdMaterials);
      const updatedElectronics = UpdateQuantity(
        "Relay",
        nutritionUnit2 ? -1 : 1
      )(prevState.electronics);

      return {
        ...prevState,
        tools: updatedTools,
        buildingMaterials: updatedBuildingMaterials,
        householdMaterials: updatedHouseholdMaterials,
        electronics: updatedElectronics,
      };
    });
    setNutritionUnit2(!nutritionUnit2);
  };

  const [nutritionUnit3, setNutritionUnit3] = useState(true);
  const handleNutritionUnit3 = () => {
    setMaterials((prevState) => {
      const updatedOthers = UpdateQuantity(
        "Majaica",
        nutritionUnit3 ? -3 : 3
      )(prevState.others);
      const updatedHouseholdMaterials = UpdateQuantity(
        "Sodium",
        nutritionUnit3 ? -3 : 3
      )(
        UpdateQuantity(
          "Cleaner",
          nutritionUnit3 ? -2 : 2
        )(prevState.householdMaterials)
      );

      return {
        ...prevState,
        others: updatedOthers,
        householdMaterials: updatedHouseholdMaterials,
      };
    });
    setNutritionUnit3(!nutritionUnit3);
  };

  const [restSpace1, setRestSpace1] = useState(true);
  const handleRestSpace1 = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "Ducttape",
        restSpace1 ? -1 : 1
      )(prevState.buildingMaterials);
      const updatedFlammableMaterials = UpdateQuantity(
        "Matches",
        restSpace1 ? -1 : 1
      )(prevState.flammableMaterials);

      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
        flammableMaterials: updatedFlammableMaterials,
      };
    });
    setRestSpace1(!restSpace1);
  };

  const [restSpace2, setRestSpace2] = useState(true);
  const handleRestSpace2 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "ESlamp",
        restSpace2 ? -3 : 3
      )(
        UpdateQuantity(
          "DVD",
          restSpace2 ? -1 : 1
        )(UpdateQuantity("Magnet", restSpace2 ? -1 : 1)(prevState.electronics))
      );

      return {
        ...prevState,
        electronics: updatedElectronics,
      };
    });
    setRestSpace2(!restSpace2);
  };

  const [restSpace3, setRestSpace3] = useState(true);
  const handleRestSpace3 = () => {
    setMaterials((prevState) => {
      const updatedEnergyElements = UpdateQuantity(
        "GreenBat",
        restSpace3 ? -5 : 5
      )(prevState.energyElements);
      const updatedElectronics = UpdateQuantity(
        "Cord",
        restSpace3 ? -4 : 4
      )(
        UpdateQuantity(
          "Caps",
          restSpace3 ? -5 : 5
        )(UpdateQuantity("Wires", restSpace3 ? -7 : 7)(prevState.electronics))
      );

      return {
        ...prevState,
        energyElements: updatedEnergyElements,
        electronics: updatedElectronics,
      };
    });
    setRestSpace3(!restSpace3);
  };

  const [scavCase, setScavCase] = useState(true);
  const handleScavCase = () => {
    setMaterials((prevState) => {
      const updatedValuables = UpdateQuantity(
        "Rooster",
        scavCase ? -1 : 1
      )(
        UpdateQuantity(
          "Roler",
          scavCase ? -4 : 4
        )(
          UpdateQuantity(
            "Goldenchain",
            scavCase ? -8 : 8
          )(
            UpdateQuantity(
              "Skull",
              scavCase ? -6 : 6
            )(UpdateQuantity("Lion", scavCase ? -3 : 3)(prevState.valuables))
          )
        )
      );
      const updatedStorageContainer = UpdateQuantity(
        "Junk",
        scavCase ? -1 : 1
      )(prevState.storageContainer);
      const updatedDrinks = UpdateQuantity(
        "Moonshine",
        scavCase ? -3 : 3
      )(prevState.drinks);

      return {
        ...prevState,
        valuables: updatedValuables,
        storageContainer: updatedStorageContainer,
        drinks: updatedDrinks,
      };
    });
    setScavCase(!scavCase);
  };

  const [security1, setSecurity1] = useState(true);
  const handleSecurity1 = () => {
    setMaterials((prevState) => {
      const updatedTools = UpdateQuantity(
        "MTape",
        security1 ? -1 : 1
      )(prevState.tools);

      return {
        ...prevState,
        tools: updatedTools,
      };
    });
    setSecurity1(!security1);
  };

  const [security2, setSecurity2] = useState(true);
  const handleSecurity2 = () => {
    setMaterials((prevState) => {
      const updatedFlammableMaterials = UpdateQuantity(
        "WD_40",
        security2 ? -1 : 1
      )(
        UpdateQuantity(
          "TP_200",
          security2 ? -1 : 1
        )(prevState.flammableMaterials)
      );
      const updatedTools = UpdateQuantity(
        "Elite",
        security2 ? -1 : 1
      )(prevState.tools);

      return {
        ...prevState,
        flammableMaterials: updatedFlammableMaterials,
        tools: updatedTools,
      };
    });
    setSecurity2(!security2);
  };

  const [security3, setSecurity3] = useState(true);
  const handleSecurity3 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "NIXXOR",
        security3 ? -8 : 8
      )(
        UpdateQuantity(
          "LCD",
          security3 ? -2 : 2
        )(UpdateQuantity("Wires", security3 ? -4 : 4)(prevState.electronics))
      );
      const updatedInfoItems = UpdateQuantity(
        "SSD",
        security3 ? -1 : 1
      )(prevState.infoItems);

      return {
        ...prevState,
        electronics: updatedElectronics,
        infoItems: updatedInfoItems,
      };
    });
    setSecurity3(!security3);
  };

  const [shootingRange1, setShootingRange1] = useState(true);
  const handleShootingRange1 = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "Mparts",
        shootingRange1 ? -1 : 1
      )(
        UpdateQuantity(
          "Bolts",
          shootingRange1 ? -1 : 1
        )(
          UpdateQuantity(
            "Nuts",
            shootingRange1 ? -1 : 1
          )(prevState.buildingMaterials)
        )
      );

      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
      };
    });
    setShootingRange1(!shootingRange1);
  };

  const [shootingRange2, setShootingRange2] = useState(true);
  const handleShootingRange2 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "EMotor",
        shootingRange2 ? -6 : 6
      )(
        UpdateQuantity(
          "EDrill",
          shootingRange2 ? -1 : 1
        )(
          UpdateQuantity(
            "Wires",
            shootingRange2 ? -3 : 3
          )(
            UpdateQuantity(
              "ESlamp",
              shootingRange2 ? -6 : 6
            )(prevState.electronics)
          )
        )
      );
      const updatedTools = UpdateQuantity(
        "MTape",
        shootingRange2 ? -1 : 1
      )(UpdateQuantity("TSet", shootingRange2 ? -1 : 1)(prevState.tools));
      const updatedBuildingMaterials = UpdateQuantity(
        "Poxeram",
        shootingRange2 ? -1 : 1
      )(
        UpdateQuantity(
          "Screws",
          shootingRange2 ? -3 : 3
        )(
          UpdateQuantity(
            "Mparts",
            shootingRange2 ? -5 : 5
          )(prevState.buildingMaterials)
        )
      );
      const updatedSpecialEquipment = UpdateQuantity(
        "Camera",
        shootingRange2 ? -3 : 3
      )(prevState.specialEquipment);

      return {
        ...prevState,
        electronics: updatedElectronics,
        tools: updatedTools,
        buildingMaterials: updatedBuildingMaterials,
        specialEquipment: updatedSpecialEquipment,
      };
    });
    setShootingRange2(!shootingRange2);
  };

  const [shootingRange3, setShootingRange3] = useState(true);
  const handleShootingRange3 = () => {
    setMaterials((prevState) => {
      const updatedTools = UpdateQuantity(
        "Master",
        shootingRange3 ? -1 : 1
      )(prevState.tools);
      const updatedElectronics = UpdateQuantity(
        "PCB",
        shootingRange3 ? -3 : 3
      )(
        UpdateQuantity(
          "Wires",
          shootingRange3 ? -5 : 5
        )(
          UpdateQuantity(
            "Caps",
            shootingRange3 ? -5 : 5
          )(
            UpdateQuantity(
              "Relay",
              shootingRange3 ? -3 : 3
            )(
              UpdateQuantity(
                "Cord",
                shootingRange3 ? -5 : 5
              )(prevState.electronics)
            )
          )
        )
      );
      const updatedBuildingMaterials = UpdateQuantity(
        "Mparts",
        shootingRange3 ? -5 : 5
      )(prevState.buildingMaterials);
      const updatedSpecialEquipment = UpdateQuantity(
        "Multitool",
        shootingRange3 ? -1 : 1
      )(prevState.specialEquipment);
      const updatedInfoItems = UpdateQuantity(
        "Manual",
        shootingRange3 ? -1 : 1
      )(prevState.infoItems);

      return {
        ...prevState,
        tools: updatedTools,
        electronics: updatedElectronics,
        buildingMaterials: updatedBuildingMaterials,
        specialEquipment: updatedSpecialEquipment,
        infoItems: updatedInfoItems,
      };
    });
    setShootingRange3(!shootingRange3);
  };

  const [solarPower, setSolarPower] = useState(true);
  const handleSolarPower = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "AESA",
        solarPower ? -4 : 4
      )(
        UpdateQuantity(
          "MCC",
          solarPower ? -1 : 1
        )(
          UpdateQuantity(
            "LCD",
            solarPower ? -3 : 3
          )(
            UpdateQuantity(
              "Mcable",
              solarPower ? -10 : 10
            )(
              UpdateQuantity(
                "PFilter",
                solarPower ? -10 : 10
              )(prevState.electronics)
            )
          )
        )
      );

      return {
        ...prevState,
        electronics: updatedElectronics,
      };
    });
    setSolarPower(!solarPower);
  };

  const [stash2, setStash2] = useState(true);
  const handleStash2 = () => {
    setMaterials((prevState) => {
      const updatedFlammableMaterials = UpdateQuantity(
        "WD_40",
        stash2 ? -4 : 4
      )(prevState.flammableMaterials);
      const updatedTools = UpdateQuantity(
        "HandDrill",
        stash2 ? -1 : 1
      )(prevState.tools);
      const updatedBuildingMaterials = UpdateQuantity(
        "Nails",
        stash2 ? -5 : 5
      )(
        UpdateQuantity("Screws", stash2 ? -10 : 10)(prevState.buildingMaterials)
      );

      return {
        ...prevState,
        flammableMaterials: updatedFlammableMaterials,
        tools: updatedTools,
        buildingMaterials: updatedBuildingMaterials,
      };
    });
    setStash2(!stash2);
  };

  const [stash3, setStash3] = useState(true);
  const handleStash3 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "EDrill",
        stash3 ? -2 : 2
      )(prevState.electronics);
      const updatedBuildingMaterials = UpdateQuantity(
        "Screws",
        stash3 ? -15 : 15
      )(UpdateQuantity("Nails", stash3 ? -7 : 7)(prevState.buildingMaterials));

      return {
        ...prevState,
        electronics: updatedElectronics,
        buildingMaterials: updatedBuildingMaterials,
      };
    });
    setStash3(!stash3);
  };

  const [stash4, setStash4] = useState(true);
  const handleStash4 = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "Nuts",
        stash4 ? -10 : 10
      )(
        UpdateQuantity(
          "Bolts",
          stash4 ? -10 : 10
        )(UpdateQuantity("Shus", stash4 ? -5 : 5)(prevState.buildingMaterials))
      );
      const updatedTools = UpdateQuantity(
        "Ratch",
        stash4 ? -2 : 2
      )(prevState.tools);

      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
        tools: updatedTools,
      };
    });
    setStash4(!stash4);
  };

  const [vents1, setVents1] = useState(true);
  const handleVents1 = () => {
    setMaterials((prevState) => {
      const updatedMaps = UpdateQuantity(
        "Factory",
        vents1 ? -1 : 1
      )(prevState.maps);

      return {
        ...prevState,
        maps: updatedMaps,
      };
    });
    setVents1(!vents1);
  };

  const [vents2, setVents2] = useState(true);
  const handleVents2 = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "Mparts",
        vents2 ? -2 : 2
      )(prevState.buildingMaterials);
      const updatedElectronics = UpdateQuantity(
        "CPUFan",
        vents2 ? -3 : 3
      )(UpdateQuantity("EMotor", vents2 ? -1 : 1)(prevState.electronics));
      const updatedEnergyElements = UpdateQuantity(
        "CarBattery",
        vents2 ? -1 : 1
      )(prevState.energyElements);

      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
        electronics: updatedElectronics,
        energyElements: updatedEnergyElements,
      };
    });
    setVents2(!vents2);
  };

  const [vents3, setVents3] = useState(true);
  const handleVents3 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "PCB",
        vents3 ? -5 : 5
      )(
        UpdateQuantity(
          "EMotor",
          vents3 ? -4 : 4
        )(UpdateQuantity("Wires", vents3 ? -14 : 14)(prevState.electronics))
      );
      const updatedBuildingMaterials = UpdateQuantity(
        "Mparts",
        vents3 ? -5 : 5
      )(prevState.buildingMaterials);
      const updatedEnergyElements = UpdateQuantity(
        "CarBattery",
        vents3 ? -4 : 4
      )(prevState.energyElements);

      return {
        ...prevState,
        electronics: updatedElectronics,
        buildingMaterials: updatedBuildingMaterials,
        energyElements: updatedEnergyElements,
      };
    });
    setVents3(!vents3);
  };

  const [waterCollector1, setWaterCollector1] = useState(true);
  const handleWaterCollector1 = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "Ducttape",
        waterCollector1 ? -3 : 3
      )(
        UpdateQuantity(
          "Nuts",
          waterCollector1 ? -5 : 5
        )(
          UpdateQuantity(
            "Bolts",
            waterCollector1 ? -5 : 5
          )(
            UpdateQuantity(
              "Hose",
              waterCollector1 ? -4 : 4
            )(prevState.buildingMaterials)
          )
        )
      );
      // Level 1 Security
      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
      };
    });
    setWaterCollector1(!waterCollector1);
  };

  const [waterCollector2, setWaterCollector2] = useState(true);
  const handleWaterCollector2 = () => {
    setMaterials((prevState) => {
      const updatedTools = UpdateQuantity(
        "TSet",
        waterCollector2 ? -2 : 2
      )(prevState.tools);
      const updatedBuildingMaterials = UpdateQuantity(
        "Hose",
        waterCollector2 ? -6 : 6
      )(
        UpdateQuantity(
          "KEK",
          waterCollector2 ? -2 : 2
        )(prevState.buildingMaterials)
      );
      const updatedElectronics = UpdateQuantity(
        "EMotor",
        waterCollector2 ? -2 : 2
      )(prevState.electronics);

      return {
        ...prevState,
        tools: updatedTools,
        buildingMaterials: updatedBuildingMaterials,
        electronics: updatedElectronics,
      };
    });
    setWaterCollector2(!waterCollector2);
  };

  const [waterCollector3, setWaterCollector3] = useState(true);
  const handleWaterCollector3 = () => {
    setMaterials((prevState) => {
      const updatedTools = UpdateQuantity(
        "Ratch",
        waterCollector3 ? -1 : 1
      )(UpdateQuantity("Elite", waterCollector3 ? -2 : 2)(prevState.tools));
      const updatedBuildingMaterials = UpdateQuantity(
        "Shus",
        waterCollector3 ? -5 : 5
      )(prevState.buildingMaterials);

      return {
        ...prevState,
        tools: updatedTools,
        buildingMaterials: updatedBuildingMaterials,
      };
    });
    setWaterCollector3(!waterCollector3);
  };

  const [weaponRack1, setWeaponRack1] = useState(true);
  const handleWeaponRack1 = () => {
    setMaterials((prevState) => {
      const updatedTools = UpdateQuantity(
        "HandDrill",
        weaponRack1 ? -1 : 1
      )(UpdateQuantity("MScissors", weaponRack1 ? -1 : 1)(prevState.tools));
      const updatedElectronics = UpdateQuantity(
        "ESlamp",
        weaponRack1 ? -5 : 5
      )(prevState.electronics);
      const updatedBuildingMaterials = UpdateQuantity(
        "Xeno",
        weaponRack1 ? -3 : 3
      )(
        UpdateQuantity(
          "Bolts",
          weaponRack1 ? -15 : 15
        )(
          UpdateQuantity(
            "Tape",
            weaponRack1 ? -5 : 5
          )(
            UpdateQuantity(
              "Nails",
              weaponRack1 ? -5 : 5
            )(prevState.buildingMaterials)
          )
        )
      );

      return {
        ...prevState,
        tools: updatedTools,
        electronics: updatedElectronics,
        buildingMaterials: updatedBuildingMaterials,
      };
    });
    setWeaponRack1(!weaponRack1);
  };

  const [weaponRack2, setWeaponRack2] = useState(true);
  const handleWeaponRack2 = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "Mparts",
        weaponRack2 ? -5 : 5
      )(
        UpdateQuantity(
          "Screws",
          weaponRack2 ? -10 : 10
        )(
          UpdateQuantity(
            "Poxeram",
            weaponRack2 ? -3 : 3
          )(
            UpdateQuantity(
              "Ducttape",
              weaponRack2 ? -5 : 5
            )(prevState.buildingMaterials)
          )
        )
      );
      const updatedElectronics = UpdateQuantity(
        "EDrill",
        weaponRack2 ? -1 : 1
      )(
        UpdateQuantity(
          "Wires",
          weaponRack2 ? -10 : 10
        )(
          UpdateQuantity(
            "ESlamp",
            weaponRack2 ? -10 : 10
          )(prevState.electronics)
        )
      );
      const updatedTools = UpdateQuantity(
        "Master",
        weaponRack2 ? -1 : 1
      )(prevState.tools);
      const updatedOthers = UpdateQuantity(
        "WParts",
        weaponRack2 ? -5 : 5
      )(prevState.others);

      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
        electronics: updatedElectronics,
        tools: updatedTools,
        others: updatedOthers,
      };
    });
    setWeaponRack2(!weaponRack2);
  };

  const [weaponRack3, setWeaponRack3] = useState(true);
  const handleWeaponRack3 = () => {
    setMaterials((prevState) => {
      const updatedElectronics = UpdateQuantity(
        "EDrill",
        weaponRack3 ? -1 : 1
      )(
        UpdateQuantity(
          "ESlamp",
          weaponRack3 ? -15 : 15
        )(
          UpdateQuantity("Wires", weaponRack3 ? -15 : 15)(prevState.electronics)
        )
      );
      const updatedBuildingMaterials = UpdateQuantity(
        "Mparts",
        weaponRack3 ? -10 : 10
      )(
        UpdateQuantity(
          "KEK",
          weaponRack3 ? -5 : 5
        )(
          UpdateQuantity(
            "Shus",
            weaponRack3 ? -3 : 3
          )(prevState.buildingMaterials)
        )
      );
      const updatedInfoItems = UpdateQuantity(
        "Manual",
        weaponRack3 ? -1 : 1
      )(prevState.infoItems);
      const updatedFlammableMaterials = UpdateQuantity(
        "FireKlean",
        weaponRack3 ? -1 : 1
      )(prevState.flammableMaterials);

      return {
        ...prevState,
        electronics: updatedElectronics,
        buildingMaterials: updatedBuildingMaterials,
        infoItems: updatedInfoItems,
        flammableMaterials: updatedFlammableMaterials,
      };
    });
    setWeaponRack3(!weaponRack3);
  };

  const [workbench1, setWorkbench1] = useState(true);
  const handleWorkbench1 = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "Nuts",
        workbench1 ? -2 : 2
      )(
        UpdateQuantity(
          "Bolts",
          workbench1 ? -2 : 2
        )(prevState.buildingMaterials)
      );
      const updatedSpecialEquipment = UpdateQuantity(
        "Multitool",
        workbench1 ? -1 : 1
      )(prevState.specialEquipment);

      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
        specialEquipment: updatedSpecialEquipment,
      };
    });
    setWorkbench1(!workbench1);
  };

  const [workbench2, setWorkbench2] = useState(true);
  const handleWorkbench2 = () => {
    setMaterials((prevState) => {
      const updatedBuildingMaterials = UpdateQuantity(
        "Bolts",
        workbench2 ? -6 : 6
      )(prevState.buildingMaterials);
      const updatedTools = UpdateQuantity(
        "TSet",
        workbench2 ? -3 : 3
      )(UpdateQuantity("Master", workbench2 ? -1 : 1)(prevState.tools));
      const updatedElectronics = UpdateQuantity(
        "EDrill",
        workbench2 ? -2 : 2
      )(prevState.electronics);
      const updatedOthers = UpdateQuantity(
        "WParts",
        workbench2 ? -3 : 3
      )(prevState.others);

      return {
        ...prevState,
        buildingMaterials: updatedBuildingMaterials,
        tools: updatedTools,
        electronics: updatedElectronics,
        others: updatedOthers,
      };
    });
    setWorkbench2(!workbench2);
  };

  const [workbench3, setWorkbench3] = useState(true);
  const handleWorkbench3 = () => {
    setMaterials((prevState) => {
      const updatedTools = UpdateQuantity(
        "Elite",
        workbench3 ? -2 : 2
      )(prevState.tools);
      const updatedFlammableMaterials = UpdateQuantity(
        "FireKlean",
        workbench3 ? -1 : 1
      )(
        UpdateQuantity(
          "Thermite",
          workbench3 ? -2 : 2
        )(prevState.flammableMaterials)
      );

      return {
        ...prevState,
        tools: updatedTools,
        flammableMaterials: updatedFlammableMaterials,
      };
    });
    setWorkbench3(!workbench3);
  };

  const initialMenuState = {
    bitCoinFarm: false,
    defectiveWall: false,
    generators: false,
    hallOfFame: false,
    heating: false,
    illumination: false,
    intelligenceCenter: false,
    lavatory: false,
    medstation: false,
    nutritionUnit: false,
    restSpace: false,
    security: false,
    shootingRange: false,
    stash: false,
    vents: false,
    waterCollector: false,
    weaponRack: false,
    workbench: false,
  };

  const [menuState, setMenuState] = useState(initialMenuState);
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
    menuKey: "",
  });

  const menuRefs = useRef({
    bitCoinFarm: null,
    defectiveWall: null,
    generators: null,
    hallOfFame: null,
    heating: null,
    illumination: null,
    intelligenceCenter: null,
    lavatory: null,
    medstation: null,
    nutritionUnit: null,
    restSpace: null,
    security: null,
    shootingRange: null,
    stash: null,
    vents: null,
    waterCollector: null,
    weaponRack: null,
    workbench: null,
  });

  const toggleMenu = (menuKey) => {
    setMenuState((prevState) => {
      const newState = { ...initialMenuState, [menuKey]: !prevState[menuKey] };
      if (newState[menuKey]) {
        // Calcular la posición del menú si está abierto
        const menuRef = menuRefs.current[menuKey];
        const triggerElement = document.querySelector(`.${menuKey}-trigger`);
        if (menuRef && triggerElement) {
          const triggerRect = triggerElement.getBoundingClientRect();
          setMenuPosition({
            top: triggerRect.bottom + window.scrollY,
            left: triggerRect.left + window.scrollX,
            menuKey,
          });
        }
      } else {
        setMenuPosition((prev) => ({ ...prev, menuKey: "" }));
      }
      return newState;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (menuPosition.menuKey) {
        const menuRef = menuRefs.current[menuPosition.menuKey];
        const triggerElement = document.querySelector(
          `.${menuPosition.menuKey}-trigger`
        );
        if (menuRef && triggerElement) {
          const triggerRect = triggerElement.getBoundingClientRect();
          setMenuPosition({
            top: triggerRect.bottom + window.scrollY,
            left: triggerRect.left + window.scrollX,
            menuKey: menuPosition.menuKey,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuPosition.menuKey]);

  const scrollCarousel = (direction) => {
    const container = document.querySelector(".caja-botones");
    const scrollAmount = 1300; // Ajusta la cantidad de desplazamiento según sea necesario
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="base">
      <h1>Hideout Requirements</h1>

      <button
        className="carousel-button left"
        onClick={() => scrollCarousel(-1)}
      >
        &#9664;
      </button>
      <div className="carousel-container">
        <div className="caja-botones">
          <div className="botones">
            <ToggleButton
              state={airFilteringUnit}
              onClick={handleAirFilteringUnit}
              label={"Air Filtering Unit"}
            />
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("bitCoinFarm")}
            >
              <button>Bit Coin Farm</button>
            </div>
            <div
              className={`menu-content ${menuState.bitCoinFarm ? "show" : ""}`}
            >
              <ToggleButton
                state={bitcoinFarm1}
                onClick={handleBitcoinFarm1}
                label={"Level 1"}
              />
              <ToggleButton
                state={bitcoinFarm2}
                onClick={handleBitcoinFarm2}
                label={"Level 2"}
              />
              <ToggleButton
                state={bitcoinFarm3}
                onClick={handleBitcoinFarm3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <ToggleButton
              state={boozeGenerator}
              onClick={handleBoozeGenerator}
              label={"Booze Generator"}
            />
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("defectiveWall")}
            >
              <button>Defective Wall</button>
            </div>
            <div
              className={`menu-content ${
                menuState.defectiveWall ? "show" : ""
              }`}
            >
              <ToggleButton
                state={defectiveWall1}
                onClick={handleDefectiveWall1}
                label={"Level 1"}
              />
              <ToggleButton
                state={defectiveWall2}
                onClick={handleDefectiveWall2}
                label={"Level 2"}
              />
              <ToggleButton
                state={defectiveWall3}
                onClick={handleDefectiveWall3}
                label={"Level 3"}
              />
              <ToggleButton
                state={defectiveWall4}
                onClick={handleDefectiveWall4}
                label={"Level 4"}
              />
              <ToggleButton
                state={defectiveWall5}
                onClick={handleDefectiveWall5}
                label={"Level 5"}
              />
              <ToggleButton
                state={defectiveWall6}
                onClick={handleDefectiveWall6}
                label={"Level 6"}
              />
            </div>
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("generators")}
            >
              <button>Generator</button>
            </div>
            <div
              className={`menu-content ${menuState.generators ? "show" : ""}`}
            >
              <ToggleButton
                state={generator1}
                onClick={handleGenerator1}
                label={"Level 1"}
              />
              <ToggleButton
                state={generator2}
                onClick={handleGenerator2}
                label={"Level 2"}
              />
              <ToggleButton
                state={generator3}
                onClick={handleGenerator3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <ToggleButton state={gym} onClick={handleGym} label={"Gym"} />
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("hallOfFame")}
            >
              <button>Hall Of Fame</button>
            </div>
            <div
              className={`menu-content ${menuState.hallOfFame ? "show" : ""}`}
            >
              <ToggleButton
                state={hallOfFame1}
                onClick={handleHallOfFame1}
                label={"Level 1"}
              />
              <ToggleButton
                state={hallOfFame2}
                onClick={handleHallOfFame2}
                label={"Level 2"}
              />
              <ToggleButton
                state={hallOfFame3}
                onClick={handleHallOfFame3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("heating")}
            >
              <button>Heating</button>
            </div>
            <div className={`menu-content ${menuState.heating ? "show" : ""}`}>
              <ToggleButton
                state={heating1}
                onClick={handleHeating1}
                label={"Level 1"}
              />
              <ToggleButton
                state={heating2}
                onClick={handleHeating2}
                label={"Level 2"}
              />
              <ToggleButton
                state={heating3}
                onClick={handleHeating3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("illumination")}
            >
              <button>Illumination</button>
            </div>
            <div
              className={`menu-content ${menuState.illumination ? "show" : ""}`}
            >
              <ToggleButton
                state={illumination1}
                onClick={handleIllumination1}
                label={"Level 1"}
              />
              <ToggleButton
                state={illumination2}
                onClick={handleIllumination2}
                label={"Level 2"}
              />
              <ToggleButton
                state={illumination3}
                onClick={handleIllumination3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("intelligenceCenter")}
            >
              <button>Intelligence Center</button>
            </div>
            <div
              className={`menu-content ${
                menuState.intelligenceCenter ? "show" : ""
              }`}
            >
              <ToggleButton
                state={intelligenceCenter1}
                onClick={handleIntelligenceCenter1}
                label={"Level 1"}
              />
              <ToggleButton
                state={intelligenceCenter2}
                onClick={handleIntelligenceCenter2}
                label={"Level 2"}
              />
              <ToggleButton
                state={intelligenceCenter3}
                onClick={handleIntelligenceCenter3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("lavatory")}
            >
              <button>Lavatory</button>
            </div>
            <div className={`menu-content ${menuState.lavatory ? "show" : ""}`}>
              <ToggleButton
                state={lavatory1}
                onClick={handleLavatory1}
                label={"Level 1"}
              />
              <ToggleButton
                state={lavatory2}
                onClick={handleLavatory2}
                label={"Level 2"}
              />
              <ToggleButton
                state={lavatory3}
                onClick={handleLavatory3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <ToggleButton
              state={library}
              onClick={handleLibrary}
              label={"Library"}
            />
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("medstation")}
            >
              <button>Medstation</button>
            </div>
            <div
              className={`menu-content ${menuState.medstation ? "show" : ""}`}
            >
              <ToggleButton
                state={medstation1}
                onClick={handleMedstation1}
                label={"Level 1"}
              />
              <ToggleButton
                state={medstation2}
                onClick={handleMedstation2}
                label={"Level 2"}
              />
              <ToggleButton
                state={medstation3}
                onClick={handleMedstation3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("nutritionUnit")}
            >
              <button>Nutrition Unit</button>
            </div>
            <div
              className={`menu-content ${
                menuState.nutritionUnit ? "show" : ""
              }`}
            >
              <ToggleButton
                state={nutritionUnit1}
                onClick={handleNutritionUnit1}
                label={"Level 1"}
              />
              <ToggleButton
                state={nutritionUnit2}
                onClick={handleNutritionUnit2}
                label={"Level 2"}
              />
              <ToggleButton
                state={nutritionUnit3}
                onClick={handleNutritionUnit3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("restSpace")}
            >
              <button>Rest Space</button>
            </div>
            <div
              className={`menu-content ${menuState.restSpace ? "show" : ""}`}
            >
              <ToggleButton
                state={restSpace1}
                onClick={handleRestSpace1}
                label={"Level 1"}
              />
              <ToggleButton
                state={restSpace2}
                onClick={handleRestSpace2}
                label={"Level 2"}
              />
              <ToggleButton
                state={restSpace3}
                onClick={handleRestSpace3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <ToggleButton
              state={scavCase}
              onClick={handleScavCase}
              label={"Scav Case"}
            />
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("security")}
            >
              <button>Security</button>
            </div>
            <div className={`menu-content ${menuState.security ? "show" : ""}`}>
              <ToggleButton
                state={security1}
                onClick={handleSecurity1}
                label={"Level 1"}
              />
              <ToggleButton
                state={security2}
                onClick={handleSecurity2}
                label={"Level 2"}
              />
              <ToggleButton
                state={security3}
                onClick={handleSecurity3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("shootingRange")}
            >
              <button>Shooting Range</button>
            </div>
            <div
              className={`menu-content ${
                menuState.shootingRange ? "show" : ""
              }`}
            >
              <ToggleButton
                state={shootingRange1}
                onClick={handleShootingRange1}
                label={"Level 1"}
              />
              <ToggleButton
                state={shootingRange2}
                onClick={handleShootingRange2}
                label={"Level 2"}
              />
              <ToggleButton
                state={shootingRange3}
                onClick={handleShootingRange3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <ToggleButton
              state={solarPower}
              onClick={handleSolarPower}
              label={"Solar Power"}
            />
          </div>

          <div className="botones">
            <div className="hamburger-icon" onClick={() => toggleMenu("stash")}>
              <button>Stash</button>
            </div>
            <div className={`menu-content ${menuState.stash ? "show" : ""}`}>
              <ToggleButton
                state={stash2}
                onClick={handleStash2}
                label={"Level 2"}
              />
              <ToggleButton
                state={stash3}
                onClick={handleStash3}
                label={"Level 3"}
              />
              <ToggleButton
                state={stash4}
                onClick={handleStash4}
                label={"Level 4"}
              />
            </div>
          </div>

          <div className="botones">
            <div className="hamburger-icon" onClick={() => toggleMenu("vents")}>
              <button>Vents</button>
            </div>
            <div className={`menu-content ${menuState.vents ? "show" : ""}`}>
              <ToggleButton
                state={vents1}
                onClick={handleVents1}
                label={"Level 1"}
              />
              <ToggleButton
                state={vents2}
                onClick={handleVents2}
                label={"Level 2"}
              />
              <ToggleButton
                state={vents3}
                onClick={handleVents3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("waterCollector")}
            >
              <button>Water Collector</button>
            </div>
            <div
              className={`menu-content ${
                menuState.waterCollector ? "show" : ""
              }`}
            >
              <ToggleButton
                state={waterCollector1}
                onClick={handleWaterCollector1}
                label={"Level 1"}
              />
              <ToggleButton
                state={waterCollector2}
                onClick={handleWaterCollector2}
                label={"Level 2"}
              />
              <ToggleButton
                state={waterCollector3}
                onClick={handleWaterCollector3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("weaponRack")}
            >
              <button>Weapon Rack</button>
            </div>
            <div
              className={`menu-content ${menuState.weaponRack ? "show" : ""}`}
            >
              <ToggleButton
                state={weaponRack1}
                onClick={handleWeaponRack1}
                label={"Level 1"}
              />
              <ToggleButton
                state={weaponRack2}
                onClick={handleWeaponRack2}
                label={"Level 2"}
              />
              <ToggleButton
                state={weaponRack3}
                onClick={handleWeaponRack3}
                label={"Level 3"}
              />
            </div>
          </div>

          <div className="botones">
            <div
              className="hamburger-icon"
              onClick={() => toggleMenu("workbench")}
            >
              <button>Workbench</button>
            </div>
            <div
              className={`menu-content ${menuState.workbench ? "show" : ""}`}
            >
              <ToggleButton
                state={workbench1}
                onClick={handleWorkbench1}
                label={"Level 1"}
              />
              <ToggleButton
                state={workbench2}
                onClick={handleWorkbench2}
                label={"Level 2"}
              />
              <ToggleButton
                state={workbench3}
                onClick={handleWorkbench3}
                label={"Level 3"}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-button right"
        onClick={() => scrollCarousel(1)}
      >
        &#9654;
      </button>

      <div className="grid-layout">
        <div className="caja c01">
          <h2>Building Materials</h2>
          {Object.keys(materials.buildingMaterials).map((key) => (
            <Items
              key={key}
              imgSrc={materials.buildingMaterials[key].icon}
              altText={key}
              quantity={materials.buildingMaterials[key].quantity}
            />
          ))}
        </div>
        <div className="caja c02">
          <h2>Electronics</h2>
          {Object.keys(materials.electronics).map((key) => (
            <Items
              key={key}
              imgSrc={materials.electronics[key].icon}
              altText={key}
              quantity={materials.electronics[key].quantity}
            />
          ))}
        </div>
        <div className="caja c03">
          <h2>Flammable Materials</h2>
          {Object.keys(materials.flammableMaterials).map((key) => (
            <Items
              key={key}
              imgSrc={materials.flammableMaterials[key].icon}
              altText={key}
              quantity={materials.flammableMaterials[key].quantity}
            />
          ))}
        </div>
        <div className="caja c04">
          <h2>Info Items</h2>
          {Object.keys(materials.infoItems).map((key) => (
            <Items
              key={key}
              imgSrc={materials.infoItems[key].icon}
              altText={key}
              quantity={materials.infoItems[key].quantity}
            />
          ))}
        </div>
        <div className="caja c05">
          <h2>Storage Container</h2>
          {Object.keys(materials.storageContainer).map((key) => (
            <Items
              key={key}
              imgSrc={materials.storageContainer[key].icon}
              altText={key}
              quantity={materials.storageContainer[key].quantity}
            />
          ))}
        </div>
        <div className="caja c06">
          <h2>Household Materials</h2>
          {Object.keys(materials.householdMaterials).map((key) => (
            <Items
              key={key}
              imgSrc={materials.householdMaterials[key].icon}
              altText={key}
              quantity={materials.householdMaterials[key].quantity}
            />
          ))}
        </div>
        <div className="caja c07">
          <h2>Valuables</h2>
          {Object.keys(materials.valuables).map((key) => (
            <Items
              key={key}
              imgSrc={materials.valuables[key].icon}
              altText={key}
              quantity={materials.valuables[key].quantity}
            />
          ))}
        </div>
        <div className="caja c08">
          <h2>Drinks</h2>
          {Object.keys(materials.drinks).map((key) => (
            <Items
              key={key}
              imgSrc={materials.drinks[key].icon}
              altText={key}
              quantity={materials.drinks[key].quantity}
            />
          ))}
        </div>
        <div className="caja c09">
          <h2>Maps</h2>
          {Object.keys(materials.maps).map((key) => (
            <Items
              key={key}
              imgSrc={materials.maps[key].icon}
              altText={key}
              quantity={materials.maps[key].quantity}
            />
          ))}
        </div>
        <div className="caja c10">
          <h2>Tools</h2>
          {Object.keys(materials.tools).map((key) => (
            <Items
              key={key}
              imgSrc={materials.tools[key].icon}
              altText={key}
              quantity={materials.tools[key].quantity}
            />
          ))}
        </div>
        <div className="caja c11">
          <h2>Energy Elements</h2>
          {Object.keys(materials.energyElements).map((key) => (
            <Items
              key={key}
              imgSrc={materials.energyElements[key].icon}
              altText={key}
              quantity={materials.energyElements[key].quantity}
            />
          ))}
        </div>
        <div className="caja c12">
          <h2>Medical Supplies</h2>
          {Object.keys(materials.medicalSupplies).map((key) => (
            <Items
              key={key}
              imgSrc={materials.medicalSupplies[key].icon}
              altText={key}
              quantity={materials.medicalSupplies[key].quantity}
            />
          ))}
        </div>
        <div className="caja c13">
          <h2>Others</h2>
          {Object.keys(materials.others).map((key) => (
            <Items
              key={key}
              imgSrc={materials.others[key].icon}
              altText={key}
              quantity={materials.others[key].quantity}
            />
          ))}
        </div>
        <div className="caja c14">
          <h2>Injury treatment</h2>
          {Object.keys(materials.injurytreatment).map((key) => (
            <Items
              key={key}
              imgSrc={materials.injurytreatment[key].icon}
              altText={key}
              quantity={materials.injurytreatment[key].quantity}
            />
          ))}
        </div>
        <div className="caja c15">
          <h2>Special Equipment</h2>
          {Object.keys(materials.specialEquipment).map((key) => (
            <Items
              key={key}
              imgSrc={materials.specialEquipment[key].icon}
              altText={key}
              quantity={materials.specialEquipment[key].quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
