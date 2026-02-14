"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (accepted && audioRef.current) {
      audioRef.current.play();
    }
  }, [accepted]);

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoPosition({ x, y });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4 relative overflow-hidden">
      {/* Background Song */}
      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mp3" />
      </audio>

      <Card className="w-full max-w-xl text-center shadow-2xl rounded-2xl bg-white/90 backdrop-blur">
        <CardContent className="p-8">
          {!accepted ? (
            <>
              <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-4xl font-bold mb-4"
              >
                Will you be my Valentine? 💖
              </motion.h1>

              {/* Your Photo */}
              <img
                src="/us.jpg"
                alt="us"
                className="w-64 h-64 object-cover mx-auto rounded-2xl mb-6 shadow-lg"
              />

              <p className="text-lg mb-8">
                DONT SAY NO STINKY
              </p>

              <div className="flex justify-center gap-6">
                <Button
                  className="text-lg px-6 py-3 rounded-2xl"
                  onClick={() => setAccepted(true)}
                >
                  Yes 💕
                </Button>

                <motion.div
                  animate={{ x: noPosition.x, y: noPosition.y }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outline"
                    className="text-lg px-6 py-3 rounded-2xl"
                    onMouseEnter={moveNoButton}
                  >
                    No 😢
                  </Button>
                </motion.div>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl font-bold mb-4">YAY!!! 🎉💘</h1>
              <p className="text-xl">I can't wait for japan ❤️
      
                (listen to the music play)</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
