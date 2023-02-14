import { ConfigurationalFunction } from "../components/ConfigurationalForm";
import { QuestionSheet } from "../pages/QuestionSheet";
import { QuestionSheetApplied } from "../pages/QuestionSheetApplied";

export const sideBarInfoIcons = [
    {
        name: 'dashboard',
        label: 'Dashboard',
        directory: 'sidebar',
        element: <></>, // this element will be rendered in the home/dashboard 
    },
    {
        name: 'saladeaula',
        label: 'Sala de Aula',
        directory: 'sidebar',
        element: <></>,
    },
    {
        name: 'questoes',
        label: 'Questões',
        directory: 'sidebar',
        element: <QuestionSheet />,
    },
    {
        name: 'revisao',
        label: 'Revisão',
        directory: 'sidebar',
        element: <></>,
    },
    {
        name: 'forum',
        label: 'Fórum',
        directory: 'welcome',
        element: <></>,
    },
    {
        name: 'mensagem',
        label: 'Mensagem',
        directory: 'sidebar',
        element: <QuestionSheetApplied />,
    },{
        name: 'config',
        label: 'Cofigurações',
        directory: 'sidebar',
        element: <ConfigurationalFunction title="Título" text="aaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" opitions={['1', '2', '3']}/>,
    },{
        name: 'info',
        label: 'Sobre',
        directory: 'sidebar',
        element: <></>,
    },
];