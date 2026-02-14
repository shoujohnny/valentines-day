"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const audioRef = useRef(null);

  useEffect(() => {
    if (accepted) {
      audioRef.current?.play();
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.6 } });
    }
  }, [accepted]);

  const moveNoButton = () => {
    const x = Math.random() * 150 - 75;
    const y = Math.random() * 150 - 75;
    setNoPosition({ x, y });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-rose-100 p-4">
      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mp3" />
      </audio>

      <Card className="w-full max-w-md text-center shadow-2xl rounded-3xl bg-white/90 backdrop-blur">
        <CardContent className="p-6 sm:p-10">
          {!accepted ? (
            <>
              <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                Will you be my Valentine? 💖
              </motion.h1>

              <img
                src="/us.jpg"
                alt="us"
                className="w-48 h-48 sm:w-64 sm:h-64 object-cover mx-auto rounded-2xl mb-6 shadow-lg"
              />

              <p className="text-base sm:text-lg mb-8 px-2">
                DONT SAY NO STINK
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  className="text-lg px-6 py-3 rounded-2xl w-full sm:w-auto"
                  onClick={() => setAccepted(true)}
                >
                  Yes 💕
                </Button>

                <motion.div
                  animate={{ x: noPosition.x, y: noPosition.y }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    className="text-lg px-6 py-3 rounded-2xl w-full"
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
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
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl font-bold">YAY!!! 🎉💘</h1>
              <p className="text-lg sm:text-xl">I can't wait for japan ❤️ (turn on your volume)</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
