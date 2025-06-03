// Configuração da API
const API_BASE_URL = '/api';  // Será substituído pelo proxy do nginx

// Função para construir URLs da API
function getApiUrl(endpoint) {
    return `${API_BASE_URL}${endpoint}`;
}

// Exporta as URLs comuns
const API_URLS = {
    // Pacientes
    PACIENTE_LOGIN: getApiUrl('/paciente/login'),
    PACIENTE_LISTAR: getApiUrl('/paciente/listar'),
    PACIENTE_CRIAR: getApiUrl('/paciente/criar'),
    PACIENTE_ATUALIZAR: (id) => getApiUrl(`/paciente/atualizar/${id}`),
    PACIENTE_DELETAR: (id) => getApiUrl(`/paciente/deletar/${id}`),
    PACIENTE_BUSCAR: (id) => getApiUrl(`/paciente/listar/${id}`),

    // Funcionários
    FUNCIONARIO_LISTAR: getApiUrl('/funcionarios/listar'),
    FUNCIONARIO_CRIAR: getApiUrl('/funcionarios/criar'),
    FUNCIONARIO_ATUALIZAR: (id) => getApiUrl(`/funcionarios/atualizar/${id}`),
    FUNCIONARIO_DELETAR: (id) => getApiUrl(`/funcionarios/deletar/${id}`),
    FUNCIONARIO_BUSCAR: (id) => getApiUrl(`/funcionarios/listar/${id}`),

    // Administradores
    ADMIN_LISTAR: getApiUrl('/administrador/administradores'),
    ADMIN_CRIAR: getApiUrl('/administrador/criar'),
    ADMIN_ATUALIZAR: (id) => getApiUrl(`/administrador/atualizar/${id}`),
    ADMIN_DELETAR: (id) => getApiUrl(`/administrador/deletar/${id}`),

    // Consultas
    CONSULTA_LISTAR: getApiUrl('/consultas/listar'),
    CONSULTA_CRIAR: getApiUrl('/consultas/criar'),
    CONSULTA_ATUALIZAR: (id) => getApiUrl(`/consultas/atualizar/${id}`),
    CONSULTA_DELETAR: (id) => getApiUrl(`/consultas/deletar/${id}`),
    CONSULTA_CANCELAR: (id) => getApiUrl(`/consultas/${id}/cancelar`),
    CONSULTA_BUSCAR: (id) => getApiUrl(`/consultas/buscar/${id}`),

    // Notificações
    NOTIFICACAO_CRIAR: getApiUrl('/notificacoes/criar')
}; 