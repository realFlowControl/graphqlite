<?php


namespace TheCodingMachine\GraphQLite\Mappers\Parameters;


use phpDocumentor\Reflection\DocBlock;
use phpDocumentor\Reflection\Type;
use ReflectionParameter;
use TheCodingMachine\GraphQLite\Annotations\Parameter;
use TheCodingMachine\GraphQLite\Parameters\ParameterInterface;

interface ParameterMapperInterface
{
    public function mapParameter(ReflectionParameter $parameter, DocBlock $docBlock, ?Type $paramTagType, ?Parameter $parameterAnnotation): ?ParameterInterface;
}