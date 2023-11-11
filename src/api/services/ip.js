/* eslint-disable no-undef */
import axios from "axios";

const getIP = async () => {
  try {
    const response = await axios.get("https://geolocation-db.com/json/fd18cb60-5f5a-11ee-87d3-bd3f0d7c4f89");
    
    // İp adresini doğrudan döndürmek yerine response içinden alabilirsiniz.
    const ip = response.data.IPv4;

    return ip;
  } catch (error) {
    // Hata durumunda daha geniş bir hata mesajı yazdırabilirsiniz.
    console.error(`Error fetching IP: ${error.message}`);
    // Hata durumunda null veya başka bir değer döndürebilirsiniz, bağlamınıza bağlı olarak.
    return null;
  }
};

export { getIP };
