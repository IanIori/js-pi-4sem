// src/components/ChecklistForm.tsx
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import './ChecklistForm.css';

interface FormData {
  nomeMotorista: string;
  fabrica: string;
  dataSaida: string;
  previsaoChegada: string;
  placaCaminhao: string;
  empresaTransporte: string;
  numeroChecklist: string;
  numeroMaquina: string;
  numeroCTE: string;
  pintura: string;
  vidros: string;
  observacoes: string;
  anexos: File[]; // Novo campo para armazenar arquivos
}

const generateChecklistNumber = (): string => {
  return 'CL-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
};

const ChecklistForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nomeMotorista: '',
    fabrica: '',
    dataSaida: '',
    previsaoChegada: '',
    placaCaminhao: '',
    empresaTransporte: '',
    numeroChecklist: '',
    numeroMaquina: '',
    numeroCTE: '',
    pintura: '',
    vidros: '',
    observacoes: '',
    anexos: [] // Inicializando o campo anexos
  });

  useEffect(() => {
    // Gera um número de checklist quando o componente é montado
    setFormData((prevState) => ({
      ...prevState,
      numeroChecklist: generateChecklistNumber()
    }));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        anexos: Array.from(e.target.files) // Atualiza o campo anexos com os arquivos selecionados
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para o backend ou realizar outra ação desejada
    console.log(formData);
  };

  return (
    <div className="checklist-form-container">
      <div className="checklist-form">
        <h1>Checklist de Verificação</h1>
        <form onSubmit={handleSubmit}>

        <div>
            <label>Número do Checklist:</label>
            <input type="text" name="numeroChecklist" value={formData.numeroChecklist} readOnly />
          </div>
          <div>
            <label>Nome do Motorista:</label>
            <input type="text" name="nomeMotorista" value={formData.nomeMotorista} onChange={handleChange} />
          </div>
          <div>
            <label>Fábrica:</label>
            <input type="text" name="fabrica" value={formData.fabrica} onChange={handleChange} />
          </div>
          <div>
            <label>Data de Saída:</label>
            <input type="date" name="dataSaida" value={formData.dataSaida} onChange={handleChange} />
          </div>
          <div>
            <label>Previsão de Chegada:</label>
            <input type="date" name="previsaoChegada" value={formData.previsaoChegada} onChange={handleChange} />
          </div>
          <div>
            <label>Placa do Caminhão:</label>
            <input type="text" name="placaCaminhao" value={formData.placaCaminhao} onChange={handleChange} />
          </div>
          <div>
            <label>Empresa de Transporte:</label>
            <input type="text" name="empresaTransporte" value={formData.empresaTransporte} onChange={handleChange} />
          </div>

          <div>
            
            <label>Número da Máquina/Equipamento:</label>
            <input type="text" name="numeroMaquina" value={formData.numeroMaquina} onChange={handleChange} />
          </div>
          
          <div>
            <label>Pintura:</label>
            <input type="text" name="pintura" value={formData.pintura} onChange={handleChange} />
          </div>
          <div>
            <label>Vidros:</label>
            <input type="text" name="vidros" value={formData.vidros} onChange={handleChange} />
          </div>
          <div>
            <label>Observações:</label>
            <textarea name="observacoes" value={formData.observacoes} onChange={handleChange}></textarea>
          </div>
          <div>
            <label>Anexar Fotos/Vídeos:</label>
            <input type="file" name="anexos" onChange={handleFileChange} multiple accept="image/*,video/*" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ChecklistForm;
