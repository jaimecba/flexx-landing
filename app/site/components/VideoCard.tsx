import React, { useRef, useState, useCallback } from 'react';

const VideoCard: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showOverlay, setShowOverlay] = useState(true);
    const [showError, setShowError] = useState(false);

    const handlePlay = useCallback(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch((err) => {
                console.error('Erro ao reproduzir vídeo:', err);
                setShowError(true);
            });
            setShowOverlay(false);
        }
    }, []);

    const handleClick = () => {
        if (showOverlay && !showError) {
            handlePlay();
        }
    };

    return (
        <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
                preload="metadata"
                onError={() => setShowError(true)}
            >
                <source src="/videos/hero-animation.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
            {showOverlay && !showError && (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-black/70"
                    onClick={handleClick}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handlePlay();
                        }
                    }}
                >
                    <div className="text-white text-3xl md:text-4xl font-bold text-center px-4">
                        Clique para Assistir
                    </div>
                </div>
            )}
            {showError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/90">
                    <div className="text-red-400 text-xl md:text-2xl font-bold text-center px-6 py-4 max-w-md">
                        Vídeo indisponível. Tente reconverter o arquivo MP4.
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoCard;
