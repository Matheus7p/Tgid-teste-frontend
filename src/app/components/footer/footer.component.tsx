export function Footer () {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between text-center md:flex-row md:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tgid. Todos os direitos reservados.
        </p>
        <div className="mt-4 md:mt-0">
          <a
            className="text-gray-400 hover:text-gray-200 transition-colors mx-2 hover:cursor-pointer"
          >
            Política de Privacidade 
          </a>
          <a
            className="text-gray-400 hover:text-gray-200 transition-colors mx-2 hover:cursor-pointer"
          >
            Termos de Serviço
          </a>
        </div>
      </div>
    </footer>
  );
};
