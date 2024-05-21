import React, { useState, useRef } from 'react';
import '../../Style/componentes/Exames.scss';

export default function Exames() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const modalRef = useRef();

  const openModal = (exam) => {
    let content = {};
    switch (exam) {
      case 'Tomografia':
        content = {
          title: 'Tomografia',
          text: 'A tomografia computadorizada é uma técnica de diagnóstico por imagem que combina radiografias tiradas em múltiplos ângulos para produzir imagens detalhadas.',
          video: 'https://www.youtube.com/embed/video1'
        };
        break;
      case 'Hemograma':
        content = {
          title: 'Hemograma',
          text: 'O hemograma é um exame de sangue que avalia as células sanguíneas, como glóbulos vermelhos, glóbulos brancos e plaquetas, além de fornecer informações sobre a hemoglobina.',
          video: 'https://www.youtube.com/embed/video2'
        };
        break;
      case 'Ressonância Magnética':
        content = {
          title: 'Ressonância Magnética',
          text: 'A ressonância magnética é uma técnica de imagem que utiliza campos magnéticos e ondas de rádio para criar imagens detalhadas dos órgãos e tecidos do corpo.',
          video: 'https://www.youtube.com/embed/video3'
        };
        break;
      case 'Eletrocardiograma':
        content = {
          title: 'Eletrocardiograma',
          text: 'O eletrocardiograma é um exame que registra a atividade elétrica do coração. É frequentemente usado para diagnosticar problemas cardíacos e monitorar a saúde do coração.',
          video: 'https://www.youtube.com/embed/video4'
        };
        break;
      default:
        content = {};
    }
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <div id='itemsExames'>
      <button id='btnTomo' onClick={() => openModal('Tomografia')}>
        Tomografia
      </button>
      <button id='btnHemo' onClick={() => openModal('Hemograma')}>
        Hemograma
      </button>
      <button id='btnRes' onClick={() => openModal('Ressonância Magnética')}>
        Ressonância Magnética
      </button>
      <button id='btnEletro' onClick={() => openModal('Eletrocardiograma')}>
        Eletrocardiograma
      </button>

      {modalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content" ref={modalRef}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2 id='tituloModal'>{modalContent.title}</h2>
            <p id='pModal'>{modalContent.text}</p>
            <iframe id='videoModal' title="Vídeo de Exemplo" width="560" height="315" src={modalContent.video} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
