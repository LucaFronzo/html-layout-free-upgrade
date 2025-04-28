
import React from "react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the HTML version
    window.location.href = "/index.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <p>Reindirizzamento alla versione HTML...</p>
    </div>
  );
};

export default Index;
