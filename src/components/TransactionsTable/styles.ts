import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        
        width: 100%;
        border-spacing: 0 0.5rem;

        .list-reponsive {
            display: none;
        }

        th {
            border: 2px solid red;
            color: var(--text-body-bg);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        @media (max-width:920px){
            th {
                display: none;
            }
            .list-reponsive {
                display: flex;
                font-size: 20px;
                font-weight: 400;
            }
        }

        td{
            
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
        .category-date{
            display: none;
        }
        td .category:nth-child(1){
            color: var(--text-body);
        }
        @media (max-width:920px){
            tr td {
            display: flex;
            }
            .category-date {

                margin: 0;
                padding: 0;
                display: flex;
                justify-content: space-between;
            }
            .category-desktop{
                display: none;
            }
            .date-desktop{
                display: none;
            }
        }     
    }
`