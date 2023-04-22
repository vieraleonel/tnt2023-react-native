const BASE_URL = "https://tnt2023.panaltesting.com.ar";

const sendQuestionToChatbot = async (message) => {
  const response = await fetch(`${BASE_URL}/chat?question=${message}`);
  return await response.json();
};

export { sendQuestionToChatbot };
