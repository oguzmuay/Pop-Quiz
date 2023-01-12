import {useMutation, useQuery, useQueryClient} from 'react-query';
import {BASE_URL, QUIZ_URL} from '../constants/endpoints';
import axios from 'axios';
import {QUIZ_QUERY} from '../constants/queries';

var QuizApi = axios.create({
  baseURL: BASE_URL + QUIZ_URL,
  timeout: 1000,
});

const GetAllQuiz = async () => {
  return QuizApi.get('/').then(response => response.data);
};

export const useGetAllQuiz = () => {
  return useQuery(
    QUIZ_QUERY,
    async () => {
      return await GetAllQuiz();
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

const GetQuizByCreatorID = async ({id}) => {
  return QuizApi.get('/byCreatorId?id=' + id).then(response => response.data);
};

export const useGetQuizByCreatorID = id => {
  return useQuery(
    QUIZ_QUERY,
    async () => {
      return await GetQuizByCreatorID({id});
    },
    {
      onSuccess: data => {
        console.log(data[0]);
      },
      onError: error => {
        console.log(error);
      },
    },
  );
};

const CreateQuiz = async ({quiz}) => {
  console.log(quiz);
  return QuizApi.post('/', quiz).then(response => response.data);
};

export const useCreateQuiz = () => {
  const client = useQueryClient();
  return useMutation(CreateQuiz, {
    onSuccess: data => {
      console.log(data);
      client.invalidateQueries(QUIZ_QUERY);
    },
    onError: error => {
      console.log(error);
    },
  });
};
