import {useMutation, useQuery, useQueryClient} from 'react-query';
import {BASE_URL, QUESTION_URL} from '../constants/endpoints';
import axios from 'axios';
import {QUESTION_QUERY} from '../constants/queries';

var QuestionApi = axios.create({
  baseURL: BASE_URL + QUESTION_URL,
  timeout: 1000,
});

const GetAllQuestion = async () => {
  return QuestionApi.get('/').then(response => response.data);
};

export const useGetAllQuestion = () => {
  return useQuery(
    QUESTION_QUERY,
    async () => {
      return await GetAllQuestion();
    },
    {
      onSuccess: data => {
        console.log(data);
      },
      onError: error => {
        console.log(error);
      },
    },
  );
};

const CreateQuestion = async ({question}) => {
  return QuestionApi.post('/', question).then(response => response.data);
};

export const useCreateQuestion = () => {
  const client = useQueryClient();
  return useMutation(CreateQuestion, {
    onSuccess: data => {
      client.invalidateQueries(QUESTION_QUERY);
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });
};
