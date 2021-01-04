import FormGroupInput from "./Inputs/formGroupInput.vue";

import DropDown from "./Dropdown.vue";
import Questionaire from "./Questionaire.vue";
import CardSuggestions from "./CardSuggestions.vue";
import Button from "./Button";

import Card from "./Cards/Card.vue";

import SidebarPlugin from "./SidebarPlugin/index";

let components = {
  FormGroupInput,
  Card,
  DropDown,
  SidebarPlugin,
  Questionaire,
  CardSuggestions
};

export default components;

export {
  FormGroupInput,
  Card,
  DropDown,
  Button,
  SidebarPlugin,
  Questionaire,
  CardSuggestions
};
