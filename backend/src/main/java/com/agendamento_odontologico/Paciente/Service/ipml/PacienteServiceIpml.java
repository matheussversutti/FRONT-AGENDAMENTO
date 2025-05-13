package com.agendamento_odontologico.Paciente.Service.ipml;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PacienteServiceIpml {

    @Override
    public ResponseEntity<?> update(Long id, PacienteDTO dto) {
        Optional<PacienteMolde> pacienteExistente = repository.findById(id);
        if (pacienteExistente.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Paciente com ID " + id + " não foi encontrado.");
        }
        PacienteMolde paciente = pacienteExistente.get();
        
        // ⚠️ Verifica se o novo e-mail já está em uso por outro paciente
        if (dto.getEmail() != null && !dto.getEmail().equals(paciente.getEmail())) {
            Optional<PacienteMolde> existente = repository.findByEmail(dto.getEmail());
            if (existente.isPresent() && !existente.get().getId().equals(id)) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("E-mail já cadastrado!");
            }
            paciente.setEmail(dto.getEmail());
        }
        
        // Atualizar nome
        if (dto.getNome() != null) {
            paciente.setNome(dto.getNome());
        }
        
        // Atualizar senha
        if (dto.getSenha() != null) {
            paciente.setSenha(dto.getSenha());
        }
        
        // Atualizar data de nascimento
        if (dto.getDataNascimento() != null) {
            paciente.setDataNascimento(dto.getDataNascimento());
        }
        
        PacienteMolde salvo = repository.save(paciente);
        return ResponseEntity.ok(mapper.map(salvo));
    }
} 