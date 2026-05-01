'use client';

import React, { useState } from 'react';

interface VideoCardProps {
    videoId: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="video-card">
            <div className="content">
                <h3 className="title">
                    Simplifique o controle de ponto coletivo da sua empresa
                </h3>
                <p className="description">
                    O Secullum Ponto Virtual moderniza o controle de ponto coletivo. Com validações rápidas e seguras, torna-se a solução ideal para empresas que buscam praticidade e economia na gestão de ponto.
                </p>
                <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="thumbnail"
                    onClick={() => setIsOpen(true)}
                />
            </div>

            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="video-player"
                        />
                        <button className="close-button" onClick={() => setIsOpen(false)}>
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoCard;
