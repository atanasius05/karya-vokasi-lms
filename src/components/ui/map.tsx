import React from "react";

const Map: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.804731621172!2d110.82934607592934!3d-7.563328774696067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16f4a97ba26f%3A0x5d3a9d0e91375023!2sJl.%20Biak%20No.17%2C%20Kepatihan%20Wetan%2C%20Kec.%20Jebres%2C%20Kota%20Surakarta%2C%20Jawa%20Tengah%2057129!5e0!3m2!1sen!2sid!4v1758772961194!5m2!1sen!2sid"
        width="600"
        height="420"
        style={{ border: 0 }}
        className="rounded-2xl shadow-md"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
