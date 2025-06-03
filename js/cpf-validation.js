// Função para validar se uma string contém apenas números
function isNumeric(str) {
    return /^\d+$/.test(str);
}

// Função para formatar CPF (apenas números)
function formatCPF(cpf) {
    // Remove tudo que não é número
    return cpf.replace(/\D/g, '');
}

// Função para validar CPF
function validateCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = formatCPF(cpf);
    
    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    
    // Validação do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rest = 11 - (sum % 11);
    let digit1 = rest > 9 ? 0 : rest;
    
    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rest = 11 - (sum % 11);
    let digit2 = rest > 9 ? 0 : rest;
    
    // Verifica se os dígitos verificadores estão corretos
    return digit1 === parseInt(cpf.charAt(9)) && digit2 === parseInt(cpf.charAt(10));
}

// Função para adicionar validação de CPF a um input
function setupCPFValidation(inputElement) {
    // Remove qualquer caractere não numérico ao digitar
    inputElement.addEventListener('input', function(e) {
        // Remove todos os caracteres não numéricos
        this.value = this.value.replace(/\D/g, '');
        
        // Limita a 11 dígitos
        if (this.value.length > 11) {
            this.value = this.value.slice(0, 11);
        }

        // Valida em tempo real
        if (this.value.length === 11) {
            if (!validateCPF(this.value)) {
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
            } else {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        } else {
            this.classList.remove('is-invalid', 'is-valid');
        }
    });

    // Valida ao perder o foco
    inputElement.addEventListener('blur', function() {
        const cpf = this.value.replace(/\D/g, '');
        
        if (cpf.length === 11) {
            if (!validateCPF(cpf)) {
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
            } else {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        } else if (cpf.length > 0) {
            this.classList.add('is-invalid');
            this.classList.remove('is-valid');
        } else {
            this.classList.remove('is-invalid', 'is-valid');
        }
    });

    // Previne a colagem de texto não numérico
    inputElement.addEventListener('paste', function(e) {
        e.preventDefault();
        const pastedText = (e.clipboardData || window.clipboardData).getData('text');
        const numbersOnly = pastedText.replace(/\D/g, '');
        this.value = numbersOnly.slice(0, 11);
    });
}

// Função para inicializar validação de CPF em todos os inputs com classe 'cpf-input'
function initializeCPFValidation() {
    document.querySelectorAll('.cpf-input').forEach(input => {
        setupCPFValidation(input);
    });
}

// Expõe as funções para o escopo global
window.CPFValidation = {
    validate: validateCPF,
    format: formatCPF,
    setup: setupCPFValidation,
    initialize: initializeCPFValidation
}; 