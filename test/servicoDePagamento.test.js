import { test, expect } from '@playwright/test';
import ServicoDePagamento from '../src/servicoDePagamento.js';

test.describe('Classe de Serviço de Pagamento', () => {

  test('Validar que o pagamento é adicionado na lista de pagamentos', async () => {
    const servicoDePagamento = new ServicoDePagamento();

    servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    expect(ultimoPagamento.codigoBarras).toBe('0987-7656-3475');
    expect(ultimoPagamento.empresa).toBe('Samar');
    expect(ultimoPagamento.valor).toBe(156.87);
  });

  test('Validar que pagamento com valor acima de 100.00 recebe categoria "cara"', async () => {
    const servicoDePagamento = new ServicoDePagamento();

    servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    expect(ultimoPagamento.categoria).toBe('cara');
  });

  test('Validar que pagamento com valor igual ou abaixo de 100.00 recebe categoria "padrão"', async () => {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar('1234-5678-9012', 'Samar', 99.99);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    expect(ultimoPagamento.categoria).toBe( 'padrão');
  });

  test('Validar que consultarUltimoPagamento retorna apenas o último pagamento', async () => {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar('1111-2222-3333', 'Empresa A', 50.00);
    servicoDePagamento.pagar('4444-5555-6666', 'Empresa B', 200.00);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    expect(ultimoPagamento.codigoBarras).toBe('4444-5555-6666');
    expect(ultimoPagamento.empresa).toBe('Empresa B');
    expect(ultimoPagamento.valor).toBe(200.00);
    expect(ultimoPagamento.categoria).toBe('cara');
  });

});
