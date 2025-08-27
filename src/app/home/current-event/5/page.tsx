"use client";
import React from "react";
import Image from "next/image";
import "../eventResponsive.css";
import "../../home-custom.css";
import { useRouter } from "next/navigation";

export default function GaneshVideoPage() {

  return (
    <div className="content-overlay">
      <style>{`
        @keyframes attractFade {
          0% { opacity: 0; transform: scale(0.9) translateY(-20px); }
          50% { opacity: 1; transform: scale(1.05) translateY(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .ganesha-attract-text {
          font-size: 2rem;
          font-weight: 800;
          color: #c44f00;
          text-align: center;
          margin-bottom: 1.2rem;
          letter-spacing: 0.04em;
          background: linear-gradient(90deg, #ffe082 10%, #fffbe6 50%, #ffe082 90%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          text-shadow: 0 2px 12px rgba(0,0,0,0.18);
          animation: attractFade 1.2s cubic-bezier(.77,0,.18,1);
        }
      `}</style>
      <div className="comeCustomBox1 current-event-shell responsive-event-shell event-detail-fadein">
        <button className="back-btn" onClick={() => window.history.back()}>← Back</button>
        <div className="ganesha-attract-text">Great Personality – Lord Gaṇeśa...<br/>The Remover of Obstacles</div>
        <h2 className="fancyTitle event-title" style={{textAlign: 'center', marginBottom: '1.5rem'}}>Illustrated Story of Lord Gaṇeśa</h2>
        <div className="event-detail-img-wrap" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem'}}>
          <div className="responsive-iframe-wrap" style={{width: '100%', maxWidth: '700px', aspectRatio: '16/9', position: 'relative'}}>
            <iframe
              src="https://www.youtube.com/embed/dRwzeZGCPhY?si=QxUQmduflQtSgOXd"
              title="Illustrated Story of Lord Gaṇeśa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '1rem'}}
            ></iframe>
          </div>
      <style>{`
        .responsive-iframe-wrap {
          width: 100%;
          max-width: 700px;
          aspect-ratio: 16/9;
          position: relative;
        }
        .responsive-iframe-wrap iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
        }
        @media (max-width: 700px) {
          .responsive-iframe-wrap {
            max-width: 98vw;
            aspect-ratio: 16/9;
          }
        }
      `}</style>
        </div>
      </div>
    </div>
  );
}

