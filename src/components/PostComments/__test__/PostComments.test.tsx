import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Teste de inserção de dois comentários', () => {
        render(<Post />);
        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('comment-submit-button');

        userEvent.type(textarea, 'Este é o primeiro comentário');
        fireEvent.click(button);
        const primeiroComentario = screen.getByText('Este é o primeiro comentário');
        expect(primeiroComentario).toBeInTheDocument();
    
        userEvent.type(textarea, 'Este é o segundo comentário');
        fireEvent.click(button);
        const segundoComentario = screen.getByText('Este é o segundo comentário');
        expect(segundoComentario).toBeInTheDocument();
    });
});