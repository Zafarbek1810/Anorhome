import {toast} from "react-toastify";

const Message = {
  serverError: function () {
    toast.error("Сервер билан боғланишда хатолик юз берди :(");
  },
  payloadLarge: function () {
    toast.error("Расм ҳажми жуда катта!");
  },
  unauthorizedError: function () {
    toast.error("Сиз рўйхатдан ўтмагансиз!");
  }
}


export default Message
