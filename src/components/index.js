import FormGroupInput from "./Inputs/formGroupInput.vue";

import DropDown from "./Dropdown.vue";
import Questionnaire from "./Questionnaire.vue";
import CardSuggestions from "./CardSuggestions.vue";
import Button from "./Button";

import Card from "./Cards/Card.vue";

import SidebarPlugin from "./SidebarPlugin/index";

let components = {
  FormGroupInput,
  Card,
  DropDown,
  SidebarPlugin,
  Questionnaire,
  CardSuggestions
};

export default components;

export {
  FormGroupInput,
  Card,
  DropDown,
  Button,
  SidebarPlugin,
  Questionnaire,
  CardSuggestions
};
