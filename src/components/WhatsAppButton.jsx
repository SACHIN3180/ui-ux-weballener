import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210"; // Your WhatsApp number

  const message =
    "Hi Aller Technologies, I would like to know more about your services.";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      aria-label="Contact us on WhatsApp"
      className="
        fixed
        bottom-24
        right-6
        z-50
        w-14
        h-14
        rounded-full
        bg-[#25D366]
        text-white
        flex
        items-center
        justify-center
        shadow-lg
        shadow-green-500/30
        hover:scale-110
        transition-all
        duration-300
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M20.52 3.449C18.24 1.164 15.225.001 12.016 0 5.398 0 .012 5.383.009 12.001c0 2.117.552 4.184 1.601 6.004L.011 24l6.14-1.61a11.95 11.95 0 0 0 5.865 1.492h.005c6.618 0 12.004-5.384 12.008-12.002.002-3.208-1.249-6.225-3.509-8.431zM12.02 21.84h-.004a9.94 9.94 0 0 1-5.067-1.388l-.363-.215-3.645.956.973-3.552-.236-.365a9.95 9.95 0 0 1-1.529-5.275C2.152 6.467 6.58 2.04 12.02 2.04c2.636 0 5.114 1.028 6.976 2.892a9.85 9.85 0 0 1 2.895 7.007c-.003 5.45-4.432 9.901-9.871 9.901z" />
      </svg>
    </button>
  );
};

export default WhatsAppButton;