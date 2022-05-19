import toast from 'react-hot-toast';
export const notifySucces = (text) => toast.success(text, {
        duration: 3000,
        style: {
          fontWeight: 600,
          fontSize: "18px",
            backgroundColor: "#1A9525",
            color: "white",
            width: "700px",
            height: "40px",}
});
    
export const notifyError = (text) => toast.error(text, {
        duration: 3000,
        style: {
          fontWeight: 700,
          fontSize: "18px",
            backgroundColor: "#FD5454",
            color: "white",
            width: "500px",
            height: "40px",}
});
    
export const notifyWarning = (text) => toast(text, {
  icon: '❕',
        duration: 2000,
        style: {
          fontWeight: 700,
          fontSize: "18px",
            backgroundColor: "#eeff41",
            color: "#651fff",
            width: "300px",
            height: "40px",}
    });