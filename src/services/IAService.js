const BASE_URL = "http://10.7.70.190:9191";

const sendQuestionToChatbot = async (message) => {
  const response = await fetch(`${BASE_URL}/chat?question=${message}`);
  return await response.json();
};

const sendImageToChatbot = async (imageUri) => {
  let formData = new FormData();
  formData.append("image", {
    uri: imageUri,
    name: "image.jpg",
    type: "image/jpg",
  });
  const response = await fetch(`${BASE_URL}/image`, {
    method: "POST",
    body: formData,
  });
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64String = reader.result;
      resolve(base64String);
    };
  });
};

export { sendQuestionToChatbot, sendImageToChatbot };
